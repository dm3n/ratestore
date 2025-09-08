
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  console.log('Function invoked, method:', req.method);
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log('Handling CORS preflight');
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Check for API key with detailed logging
    const groqApiKey = Deno.env.get('GROQ_API_KEY') || Deno.env.get('GROQ API') || Deno.env.get('GROQ');
    console.log('Environment variables check:');
    console.log('- GROQ_API_KEY exists:', !!Deno.env.get('GROQ_API_KEY'));
    console.log('- GROQ API exists:', !!Deno.env.get('GROQ API'));
    console.log('- GROQ exists:', !!Deno.env.get('GROQ'));
    console.log('- Final API key available:', !!groqApiKey);
    
    if (!groqApiKey) {
      console.error('No GROQ API key found');
      throw new Error('GROQ API key not configured. Please add it in Supabase Edge Function Secrets.');
    }

    const requestBody = await req.json();
    console.log('Request body:', requestBody);
    
    const { message } = requestBody;
    if (!message) {
      throw new Error('Message is required');
    }

    const systemPrompt = `You are a professional financial assistant for RateStore.ca, a Canadian financial comparison platform. You provide helpful, accurate, and professional advice about:

- Mortgages and mortgage rates
- Credit cards and rewards programs
- Banking products (savings, chequing accounts)
- Personal loans and financing
- Insurance (auto, home, life)
- Investment products (GICs, RRSPs, TFSAs)
- Financial calculators and tools

Guidelines:
- Keep responses professional, clear, and concise
- Focus on Canadian financial products and regulations
- Provide helpful information but always recommend speaking with licensed professionals for specific advice
- If asked about topics outside finance, politely redirect to financial topics
- Use Canadian financial terminology and context
- Be encouraging and supportive while maintaining professionalism

Always end complex financial advice with: "For personalized advice, please consult with a licensed financial advisor."`;

    console.log('Making request to GROQ API...');
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${groqApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3-70b-8192',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    console.log('GROQ API response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('GROQ API error response:', errorText);
      throw new Error(`GROQ API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('GROQ API response data:', data);
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error('Invalid response format from GROQ API');
    }

    const aiResponse = data.choices[0].message.content;
    console.log('Sending response back to client');

    return new Response(JSON.stringify({ response: aiResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chat-groq function:', error);
    console.error('Error stack:', error.stack);
    
    return new Response(JSON.stringify({ 
      error: error.message || 'Failed to process request',
      details: 'Check the edge function logs for more information'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

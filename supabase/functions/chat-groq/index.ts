
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const groqApiKey = Deno.env.get('GROQ_API_KEY') || Deno.env.get('GROQ');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('GROQ API Key available:', !!groqApiKey);
    
    if (!groqApiKey) {
      throw new Error('GROQ API key not found in environment variables');
    }
    
    const { message } = await req.json();

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

    if (!response.ok) {
      throw new Error(`GROQ API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    return new Response(JSON.stringify({ response: aiResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chat-groq function:', error);
    return new Response(JSON.stringify({ error: 'Failed to process request' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      banking_rates: {
        Row: {
          account_category: string | null
          account_name: string
          account_type: string
          created_at: string
          features: Json | null
          fee_waiver_conditions: string | null
          id: string
          institution: string
          interest_rate: number | null
          is_active: boolean | null
          is_featured: boolean | null
          minimum_balance: number | null
          monthly_fee: number | null
          province: string | null
          special_offers: string | null
          transaction_limit: number | null
          updated_at: string
        }
        Insert: {
          account_category?: string | null
          account_name: string
          account_type: string
          created_at?: string
          features?: Json | null
          fee_waiver_conditions?: string | null
          id?: string
          institution: string
          interest_rate?: number | null
          is_active?: boolean | null
          is_featured?: boolean | null
          minimum_balance?: number | null
          monthly_fee?: number | null
          province?: string | null
          special_offers?: string | null
          transaction_limit?: number | null
          updated_at?: string
        }
        Update: {
          account_category?: string | null
          account_name?: string
          account_type?: string
          created_at?: string
          features?: Json | null
          fee_waiver_conditions?: string | null
          id?: string
          institution?: string
          interest_rate?: number | null
          is_active?: boolean | null
          is_featured?: boolean | null
          minimum_balance?: number | null
          monthly_fee?: number | null
          province?: string | null
          special_offers?: string | null
          transaction_limit?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          author: string
          category: string
          content: string
          created_at: string
          excerpt: string | null
          featured_image_url: string | null
          id: string
          is_featured: boolean
          is_published: boolean
          read_time: string
          title: string
          updated_at: string
        }
        Insert: {
          author: string
          category: string
          content: string
          created_at?: string
          excerpt?: string | null
          featured_image_url?: string | null
          id?: string
          is_featured?: boolean
          is_published?: boolean
          read_time: string
          title: string
          updated_at?: string
        }
        Update: {
          author?: string
          category?: string
          content?: string
          created_at?: string
          excerpt?: string | null
          featured_image_url?: string | null
          id?: string
          is_featured?: boolean
          is_published?: boolean
          read_time?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      card_finder_submissions: {
        Row: {
          annual_income_range: string
          balance_transfer_amount: number | null
          card_purpose: string
          city: string | null
          created_at: string
          credit_score_range: string
          current_cards: Json | null
          date_of_birth: string | null
          id: string
          max_annual_fee: number | null
          monthly_spending: Json | null
          postal_code: string | null
          preferred_features: Json | null
          primary_spending_categories: Json | null
          province: string | null
          session_id: string
          travel_frequency: string | null
          user_id: string | null
        }
        Insert: {
          annual_income_range: string
          balance_transfer_amount?: number | null
          card_purpose: string
          city?: string | null
          created_at?: string
          credit_score_range: string
          current_cards?: Json | null
          date_of_birth?: string | null
          id?: string
          max_annual_fee?: number | null
          monthly_spending?: Json | null
          postal_code?: string | null
          preferred_features?: Json | null
          primary_spending_categories?: Json | null
          province?: string | null
          session_id: string
          travel_frequency?: string | null
          user_id?: string | null
        }
        Update: {
          annual_income_range?: string
          balance_transfer_amount?: number | null
          card_purpose?: string
          city?: string | null
          created_at?: string
          credit_score_range?: string
          current_cards?: Json | null
          date_of_birth?: string | null
          id?: string
          max_annual_fee?: number | null
          monthly_spending?: Json | null
          postal_code?: string | null
          preferred_features?: Json | null
          primary_spending_categories?: Json | null
          province?: string | null
          session_id?: string
          travel_frequency?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      card_recommendations: {
        Row: {
          card_id: string
          created_at: string
          id: string
          match_reasons: Json | null
          match_score: number
          rank: number
          submission_id: string
        }
        Insert: {
          card_id: string
          created_at?: string
          id?: string
          match_reasons?: Json | null
          match_score: number
          rank: number
          submission_id: string
        }
        Update: {
          card_id?: string
          created_at?: string
          id?: string
          match_reasons?: Json | null
          match_score?: number
          rank?: number
          submission_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "card_recommendations_card_id_fkey"
            columns: ["card_id"]
            isOneToOne: false
            referencedRelation: "credit_cards"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "card_recommendations_submission_id_fkey"
            columns: ["submission_id"]
            isOneToOne: false
            referencedRelation: "card_finder_submissions"
            referencedColumns: ["id"]
          },
        ]
      }
      credit_cards: {
        Row: {
          annual_fee: number | null
          apply_url: string | null
          balance_transfer_apr: number | null
          balance_transfer_fee: number | null
          card_type: string
          cash_advance_apr: number | null
          cash_advance_fee: number | null
          cashback_rate_dining: number | null
          cashback_rate_gas: number | null
          cashback_rate_general: number | null
          cashback_rate_grocery: number | null
          cashback_rate_travel: number | null
          cons: Json | null
          created_at: string
          credit_score_required: string | null
          features: Json | null
          foreign_transaction_fee: number | null
          id: string
          insurance_benefits: Json | null
          intro_apr: number | null
          intro_period_months: number | null
          is_active: boolean | null
          issuer: string
          late_payment_fee: number | null
          minimum_income_required: number | null
          name: string
          overlimit_fee: number | null
          points_per_dollar: number | null
          promotional_offer: string | null
          pros: Json | null
          regular_apr: number | null
          rewards_program: string | null
          travel_benefits: Json | null
          updated_at: string
          welcome_bonus_requirement: number | null
          welcome_bonus_timeframe: number | null
          welcome_bonus_value: number | null
        }
        Insert: {
          annual_fee?: number | null
          apply_url?: string | null
          balance_transfer_apr?: number | null
          balance_transfer_fee?: number | null
          card_type: string
          cash_advance_apr?: number | null
          cash_advance_fee?: number | null
          cashback_rate_dining?: number | null
          cashback_rate_gas?: number | null
          cashback_rate_general?: number | null
          cashback_rate_grocery?: number | null
          cashback_rate_travel?: number | null
          cons?: Json | null
          created_at?: string
          credit_score_required?: string | null
          features?: Json | null
          foreign_transaction_fee?: number | null
          id?: string
          insurance_benefits?: Json | null
          intro_apr?: number | null
          intro_period_months?: number | null
          is_active?: boolean | null
          issuer: string
          late_payment_fee?: number | null
          minimum_income_required?: number | null
          name: string
          overlimit_fee?: number | null
          points_per_dollar?: number | null
          promotional_offer?: string | null
          pros?: Json | null
          regular_apr?: number | null
          rewards_program?: string | null
          travel_benefits?: Json | null
          updated_at?: string
          welcome_bonus_requirement?: number | null
          welcome_bonus_timeframe?: number | null
          welcome_bonus_value?: number | null
        }
        Update: {
          annual_fee?: number | null
          apply_url?: string | null
          balance_transfer_apr?: number | null
          balance_transfer_fee?: number | null
          card_type?: string
          cash_advance_apr?: number | null
          cash_advance_fee?: number | null
          cashback_rate_dining?: number | null
          cashback_rate_gas?: number | null
          cashback_rate_general?: number | null
          cashback_rate_grocery?: number | null
          cashback_rate_travel?: number | null
          cons?: Json | null
          created_at?: string
          credit_score_required?: string | null
          features?: Json | null
          foreign_transaction_fee?: number | null
          id?: string
          insurance_benefits?: Json | null
          intro_apr?: number | null
          intro_period_months?: number | null
          is_active?: boolean | null
          issuer?: string
          late_payment_fee?: number | null
          minimum_income_required?: number | null
          name?: string
          overlimit_fee?: number | null
          points_per_dollar?: number | null
          promotional_offer?: string | null
          pros?: Json | null
          regular_apr?: number | null
          rewards_program?: string | null
          travel_benefits?: Json | null
          updated_at?: string
          welcome_bonus_requirement?: number | null
          welcome_bonus_timeframe?: number | null
          welcome_bonus_value?: number | null
        }
        Relationships: []
      }
      gic_rates: {
        Row: {
          created_at: string
          gic_type: string
          id: string
          institution: string
          is_active: boolean | null
          is_featured: boolean | null
          is_sponsored: boolean | null
          max_investment: number | null
          min_investment: number | null
          promotional_expires_at: string | null
          promotional_rate: boolean | null
          province: string | null
          rate: number
          special_features: Json | null
          term: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          gic_type: string
          id?: string
          institution: string
          is_active?: boolean | null
          is_featured?: boolean | null
          is_sponsored?: boolean | null
          max_investment?: number | null
          min_investment?: number | null
          promotional_expires_at?: string | null
          promotional_rate?: boolean | null
          province?: string | null
          rate: number
          special_features?: Json | null
          term: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          gic_type?: string
          id?: string
          institution?: string
          is_active?: boolean | null
          is_featured?: boolean | null
          is_sponsored?: boolean | null
          max_investment?: number | null
          min_investment?: number | null
          promotional_expires_at?: string | null
          promotional_rate?: boolean | null
          province?: string | null
          rate?: number
          special_features?: Json | null
          term?: string
          updated_at?: string
        }
        Relationships: []
      }
      mortgage_rates: {
        Row: {
          base_rate: number
          created_at: string
          id: string
          is_active: boolean | null
          lender_name: string
          lender_type: string
          max_loan_to_value: number | null
          min_down_payment: number | null
          prime_discount: string | null
          province: string | null
          rate_type: string
          special_conditions: Json | null
          term: string
          transaction_types: string[] | null
          updated_at: string
        }
        Insert: {
          base_rate: number
          created_at?: string
          id?: string
          is_active?: boolean | null
          lender_name: string
          lender_type: string
          max_loan_to_value?: number | null
          min_down_payment?: number | null
          prime_discount?: string | null
          province?: string | null
          rate_type: string
          special_conditions?: Json | null
          term: string
          transaction_types?: string[] | null
          updated_at?: string
        }
        Update: {
          base_rate?: number
          created_at?: string
          id?: string
          is_active?: boolean | null
          lender_name?: string
          lender_type?: string
          max_loan_to_value?: number | null
          min_down_payment?: number | null
          prime_discount?: string | null
          province?: string | null
          rate_type?: string
          special_conditions?: Json | null
          term?: string
          transaction_types?: string[] | null
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_accounts: {
        Row: {
          account_name: string
          account_type: string
          balance: number
          created_at: string
          id: string
          institution: string | null
          interest_rate: number | null
          is_active: boolean | null
          updated_at: string
          user_id: string
        }
        Insert: {
          account_name: string
          account_type: string
          balance?: number
          created_at?: string
          id?: string
          institution?: string | null
          interest_rate?: number | null
          is_active?: boolean | null
          updated_at?: string
          user_id: string
        }
        Update: {
          account_name?: string
          account_type?: string
          balance?: number
          created_at?: string
          id?: string
          institution?: string | null
          interest_rate?: number | null
          is_active?: boolean | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_dashboard_stats: {
        Row: {
          created_at: string
          emergency_fund: number | null
          id: string
          monthly_budget: number | null
          savings_goal: number | null
          total_savings: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          emergency_fund?: number | null
          id?: string
          monthly_budget?: number | null
          savings_goal?: number | null
          total_savings?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          emergency_fund?: number | null
          id?: string
          monthly_budget?: number | null
          savings_goal?: number | null
          total_savings?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      user_transactions: {
        Row: {
          account_id: string | null
          amount: number
          category: string | null
          created_at: string
          description: string
          id: string
          transaction_date: string
          transaction_type: string
          user_id: string
        }
        Insert: {
          account_id?: string | null
          amount: number
          category?: string | null
          created_at?: string
          description: string
          id?: string
          transaction_date?: string
          transaction_type: string
          user_id: string
        }
        Update: {
          account_id?: string | null
          amount?: number
          category?: string | null
          created_at?: string
          description?: string
          id?: string
          transaction_date?: string
          transaction_type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_transactions_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "user_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _user_id: string
          _role: Database["public"]["Enums"]["app_role"]
        }
        Returns: boolean
      }
      make_user_admin: {
        Args: { user_email: string }
        Returns: undefined
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const

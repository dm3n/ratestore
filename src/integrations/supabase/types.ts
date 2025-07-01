export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
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

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
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

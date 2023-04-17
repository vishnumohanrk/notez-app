export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      notes: {
        Row: {
          html: string;
          id: number;
          inserted_at: string;
          text: string;
          title: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          html: string;
          id?: number;
          inserted_at?: string;
          text: string;
          title: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          html?: string;
          id?: number;
          inserted_at?: string;
          text?: string;
          title?: string;
          updated_at?: string;
          user_id?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

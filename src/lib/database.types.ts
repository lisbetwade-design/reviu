export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          updated_at?: string;
        };
      };
      projects: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          description: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          description?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          name?: string;
          description?: string;
          updated_at?: string;
        };
      };
      designs: {
        Row: {
          id: string;
          project_id: string;
          name: string;
          source_type: string;
          source_url: string | null;
          image_url: string | null;
          shareable_token: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          project_id: string;
          name: string;
          source_type?: string;
          source_url?: string | null;
          image_url?: string | null;
          shareable_token?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          name?: string;
          source_type?: string;
          source_url?: string | null;
          image_url?: string | null;
          updated_at?: string;
        };
      };
      feedback: {
        Row: {
          id: string;
          design_id: string;
          stakeholder_name: string;
          stakeholder_email: string | null;
          stakeholder_role: string;
          content: string;
          rating: number | null;
          source_type: string;
          is_processed: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          design_id: string;
          stakeholder_name: string;
          stakeholder_email?: string | null;
          stakeholder_role?: string;
          content: string;
          rating?: number | null;
          source_type?: string;
          is_processed?: boolean;
          created_at?: string;
        };
        Update: {
          is_processed?: boolean;
        };
      };
      board_items: {
        Row: {
          id: string;
          user_id: string;
          project_id: string | null;
          design_id: string | null;
          title: string;
          description: string;
          status: string;
          priority: string;
          stakeholder_role: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          project_id?: string | null;
          design_id?: string | null;
          title: string;
          description?: string;
          status?: string;
          priority?: string;
          stakeholder_role?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          title?: string;
          description?: string;
          status?: string;
          priority?: string;
          stakeholder_role?: string | null;
          updated_at?: string;
        };
      };
      feedback_summaries: {
        Row: {
          id: string;
          project_id: string;
          design_id: string | null;
          summary_data: Record<string, unknown>;
          created_at: string;
        };
        Insert: {
          id?: string;
          project_id: string;
          design_id?: string | null;
          summary_data: Record<string, unknown>;
          created_at?: string;
        };
        Update: {
          summary_data?: Record<string, unknown>;
        };
      };
      stakeholders: {
        Row: {
          id: string;
          email: string;
          name: string;
          surname: string;
          role: string;
          created_at: string;
          last_active_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          name: string;
          surname: string;
          role?: string;
          created_at?: string;
          last_active_at?: string;
        };
        Update: {
          name?: string;
          surname?: string;
          role?: string;
          last_active_at?: string;
        };
      };
      comments: {
        Row: {
          id: string;
          design_id: string;
          user_id: string | null;
          stakeholder_id: string | null;
          author_name: string;
          author_email: string;
          content: string;
          status: string;
          rating: number | null;
          x_position: number | null;
          y_position: number | null;
          page_url: string | null;
          theme: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          design_id: string;
          user_id?: string | null;
          stakeholder_id?: string | null;
          author_name?: string;
          author_email?: string;
          content: string;
          status?: string;
          rating?: number | null;
          x_position?: number | null;
          y_position?: number | null;
          page_url?: string | null;
          theme?: string | null;
          created_at?: string;
        };
        Update: {
          content?: string;
          status?: string;
          rating?: number | null;
          page_url?: string | null;
          theme?: string | null;
        };
      };
    };
  };
}

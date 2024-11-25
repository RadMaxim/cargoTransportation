export interface Video {
    id?: number;
    pageURL?: string;
    type?: string;
    tags?: string;
    duration?: number;
    views?: number;
    downloads?: number;
    likes?: number;
    comments?: number;
    user?: string;
    user_id?: number;
    userImageURL?: string;
    videos?: {
      large?: {
        url?: string;
        width?: number;
        height?: number;
        size?: number;
        thumbnail?:string;
      };
      medium?: {
        url?: string;
        width?: number;
        height?: number;
        size?: number;
        thumbnail?:string;
      };
      small?: {
        url?: string;
        width?: number;
        height?: number;
        size?: number;
        thumbnail?:string;
      };
      tiny?: {
        url?: string;
        width?: number;
        height?: number;
        size?: number;
      };
    };
  }
  
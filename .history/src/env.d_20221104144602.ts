/// <reference types="@astrojs/image/client" />
declare namespace custom {
    interface HTMLAttributes {
      'data-count'?: number;
      'data-label'?: string;
    }
  }
declare interface Page {
    title: string;
    slug: string;
    html: string;
}
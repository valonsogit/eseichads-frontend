/// <reference types="@astrojs/image/client" />

interface TopLevelPage {
    id: number
    attributes: {
        title: string;
        slug: string;
        html: string;
    }
}
interface Meta
interface StrapiResponse {
    data: any[]
    meta: Meta;
}
/// <reference types="@astrojs/image/client" />

interface TopLevelPage {
    id: number
    attributes: {
        title: string;
        slug: string;
        html: string;
    }
}
interface Meta {
    pagination: {
        total: number;
        count: number;
        page
}
interface StrapiResponse {
    data: any[]
    meta: Meta;
}
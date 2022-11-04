/// <reference types="@astrojs/image/client" />

interface TopLevelPage {
    id: number
    attributes: {
        title: string;
        slug: string;
        html: string;
    }
}
interface StrapiResponse {
    data: TopLevelPage[]
    meta: Meta;
}
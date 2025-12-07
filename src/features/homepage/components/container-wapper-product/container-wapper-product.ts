export interface ContainerWrapperProductProps {
    title: string;
    getData: () => Promise<string[]>;
    products: Array<{
        id: string;
        name: string;
        rating: number;
        price: number;
        imageSrc: string;
        imageAlt: string;
    }>;
    columnsCount?: number;
}

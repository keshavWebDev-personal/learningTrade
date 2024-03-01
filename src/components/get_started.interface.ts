type College = {
    name: string;
    alias: string;
    address: {
        local: string;
        city: string;
        district: string;
        state: string;
        country: string;
    };
    id: string;
};

export type { College };

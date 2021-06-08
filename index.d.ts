export function clean(rut: string): string;

export function validate(rut: string): boolean;

export function format(rut: string, options?: { dots: boolean }): string;

export function getCheckDigit(rut: string): string;

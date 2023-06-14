import { Dispatch, SetStateAction } from 'react';

interface FieldTranslations {
    [key: string]: string;
}

export const fieldTranslations: FieldTranslations = {
    'titel.titel': 'Titel',
    isbn: 'ISBN',
    art: 'BuchArt',
    preis: 'Preis',
    datum: 'Datum',
    homepage: 'Homepage',
};

export const handleErrorResponse = (
    response: any,
    setError: Dispatch<SetStateAction<string>>,
) => {
    const { message } = response.data;
    let errorMessage = 'Fehler beim Anlegen des Buches.';

    if (Array.isArray(message)) {
        errorMessage = message
            .map((error: string) => {
                const fieldName = error.split(' ')[0].replace(':', '');
                const translatedFieldName =
                    fieldTranslations[fieldName] || fieldName;
                return `${translatedFieldName} ist ungültig.`;
            })
            .join(' ');
    }

    setError(errorMessage);
};

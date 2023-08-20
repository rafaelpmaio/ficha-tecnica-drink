import { IHeader } from "shared/interfaces/IHeader";

export default function headerInfosGetter(cardDisplayRef: React.RefObject<HTMLDivElement>) {

    const cardDiv = cardDisplayRef.current;
    let headerId = 1;
    let headerTitle = cardDiv?.querySelector('h2')?.innerHTML;
    let headerImage = cardDiv?.querySelector('img')?.src;
    let headerDescription = cardDiv?.querySelector('p')?.innerHTML;
    let newHeader: IHeader;

    headerTitle === "Default Collection" ? headerId = 0 : headerId = 1;

    headerDescription === undefined ? headerDescription = '' : headerDescription = headerDescription;

    headerTitle !== undefined && headerImage !== undefined 
    ? newHeader = {
        id: headerId,
        title: headerTitle,
        image: headerImage,
        description: headerDescription
    }
    : newHeader = {title: 'not found', image: 'assets/images/drink-logo.png'}
    return newHeader;
}
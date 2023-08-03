import { IHeader } from "shared/interfaces/IHeader";

export default function headerInfosGetter(cardDisplayRef: React.RefObject<HTMLDivElement>) {

    const cardDiv = cardDisplayRef.current;
    let headerTitle = cardDiv?.querySelector('h2')?.innerHTML;
    let headerImage = cardDiv?.querySelector('img')?.src;
    let newHeader: IHeader;

    headerTitle !== undefined && headerImage !== undefined 
    ? newHeader = {
        title: headerTitle,
        image: headerImage
    }
    : newHeader = {title: 'not found', image: 'assets/images/drink-logo.png'}
    console.log(newHeader)
    return newHeader;
}
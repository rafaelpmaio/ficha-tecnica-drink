import CollectionsCard from "components/CollectionsCard";
import Button from "components/Button";

export default function Home() {

    return (
        <>
            <CollectionsCard />
            <Button aoClickado={() => { }} value="Criar nova Coleção" />
        </>
    )
};
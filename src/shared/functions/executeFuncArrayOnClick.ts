export default function executeFuncArrayOnClick(
    funcArr: ((param: any) => void)[]) {
        funcArr.forEach(func => func);
    } 
// export default function executeFuncArrayOnClick(
//     event: React.MouseEvent<HTMLButtonElement, MouseEvent>, 
//     funcArr: (() => void)[]) {
//         event.preventDefault();
//         funcArr.forEach(func => func);
//     } 

    // funcArr: {(params:any) : void }[] = []
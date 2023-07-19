export default function calculaPorcentagemDeCusto(precoVenda: number, custoProducao: number) {
    precoVenda
        ? precoVenda = precoVenda
        : precoVenda = custoProducao
    return (custoProducao / precoVenda) * 100;
}
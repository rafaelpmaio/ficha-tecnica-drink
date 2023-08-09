export default function calculaPorcentagemDeCusto(custoProducao: number, precoVenda: number) {
    let costPercentage = (custoProducao / precoVenda) * 100;
    return costPercentage ? costPercentage : 0;
}
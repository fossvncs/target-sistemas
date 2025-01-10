// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

interface Faturamento {
    estado: string;
    valor: number;
}

// faturamentos por estado
const faturamentos: Faturamento[] = [
    { estado: "SP", valor: 67836.43 },
    { estado: "RJ", valor: 36678.66 },
    { estado: "MG", valor: 29229.88 },
    { estado: "ES", valor: 27165.48 },
    { estado: "Outros", valor: 19849.53 },
];

// faturamento total
const faturamentoTotal = faturamentos.reduce((total, item) => total + item.valor, 0);

// contribuição percentual de cada estado
console.log("Percentual de representação de cada estado:");
faturamentos.forEach((item) => {
    const percentual = (item.valor / faturamentoTotal) * 100;
    console.log(`${item.estado}: ${percentual.toFixed(2)}%`);
});

// faturamento total
console.log(`Faturamento total: R$${faturamentoTotal.toFixed(2)}`);

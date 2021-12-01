import { Container } from "./style";
import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

function Home() {
  const [products, setProducts] = useState([
    {
      code: 10,
      name: "Smart TV Led 50 Semp",
      description:
        "SK8300 4K HDR Android Wi-Fi 3 HDMI 2 USB Controle Remoto com atalhos Chromecast Integrado",
      price: 2299.99,
      discount: 190.99,
    },
    {
      code: 11,
      name: "Smartphone Samsung Galaxy A72 128GB",
      description:
        "4G Wi-Fi Tela 6.7 Dual Chip 6GB RAM Câmera Quádrupla + Selfie 32MP - Preto",
      price: 1988.4,
      discount: 87.89,
    },
    {
      code: 12,
      name: "Smartwatch Samsung Galaxy Watch Active",
      description:
        "4O Galaxy Watch Active é o smartwatch ideal para quem tem um estilo de vida ativo e saudável. Ele é leve, confortável e monitora diariamente suas atividades físicas, e os comportamentos de nível de stress e sono",
      price: 678.6,
      discount: 110.19,
    },
  ]);

  const [code, setCode] = useState(0);
  const [price, setPrice] = useState(0);
  const [dis, setDis] = useState(0);
  const [name, setName] = useState("");
  const [discription, setDiscr] = useState("");

  function handleClick() {
    const newIten = {
      code: Number(code),
      name: name,
      discription: discription,
      price: Number(price),
      discount: Number(dis),
    };

    setProducts([...products, newIten]);
  }

  const totalDiscount = products.reduce((a, b) => a + b.discount, 0);
  const total = products.reduce((a, b) => a + b.price, 0);

  return (
    <Container>
      <h2>Valor da compra:{total.toFixed(2)}</h2>
      <h2>Valor economizado:{totalDiscount.toFixed(2)}</h2>
      <Input
        placeholder="code"
        type="number"
        onChange={(event) => setCode(event.target.value)}
      />
      <Input
        placeholder="name"
        type="text"
        onChange={(event) => setName(event.target.value)}
      />
      <Input
        placeholder="description"
        type="text"
        onChange={(event) => setDiscr(event.target.value)}
      />
      <Input
        placeholder="price"
        type="number"
        onChange={(event) => setPrice(event.target.value)}
      />
      <Input
        placeholder="discount"
        type="number"
        onChange={(event) => setDis(event.target.value)}
      />
      <Button onClick={handleClick}>Enviar</Button>
      <h2>Itens do carrinho</h2>
      {products.map((iten, index) => (
        <p key={index}>{iten.name}</p>
      ))}
    </Container>
  );
}

export default Home;

# README - Conectados.ao ERP

O Conectados.ao é um sistema ERP online desenvolvido para pequenas e médias empresas em Angola. Este projeto inclui o website institucional completo com quatro páginas principais: Home, Funcionalidades, Planos e Contato.

Estrutura do Projeto
```text
conectados-ao/
├── index.html              # Página inicial
├── funcionalidades.html    # Página de funcionalidades
├── planos.html             # Página de planos
├── contato.html            # Página de contato
├── css/
│   ├── style.css           # Estilos principais
│   └── responsive.css      # Estilos responsivos
├── js/
│   └── script.js           # JavaScript principal
├── images/                 # Pasta para imagens
├── assets/                 # Pasta para fontes e bibliotecas
└── README.md               # Este arquivo
```
## Recursos Implementados
### Design e Layout
- Design moderno e corporativo

- Cores principais: azul (#0072CE), laranja (#FF6B00), cinza claro (#F5F6FA) e branco (#FFFFFF)

- Tipografia: Poppins (Google Fonts)

- Ícones: Font Awesome (v6.4.0)

- Layout totalmente responsivo (desktop, tablet, mobile)

### Funcionalidades JavaScript
- Menu responsivo com hambúrguer para mobile

- Animações suaves ao rolar a página

- Modal de captura de e-mail para teste grátis

- Validação de formulários

- Accordion FAQ na página de planos

- Tabs para seleção de periodicidade na página de planos

## Páginas
### Home

Seção hero com CTA

Seção de funcionalidades em grid

Seção de planos com tabela comparativa

Seção de segmentos atendidos

Seção de integrações

Seção CTA final

### Funcionalidades

Lista detalhada de módulos (Vendas, Estoque, Financeiro, etc.)

Layout em cards com ícones e descrições

Design consistente e informativo

### Planos

Tabela de comparação com 3 planos

Destaque visual para o plano mais popular

Seção de perguntas frequentes (FAQ)

Opção de visualização mensal/anual

### Contato

Formulário de contato completo

Cards com informações de contato

Mapa do Google Maps incorporado

Validação de campos

## Tecnologias Utilizadas
HTML5 semântico

CSS3 com Flexbox e Grid

JavaScript puro (sem frameworks)

Font Awesome para ícones

Google Fonts (Poppins)

Google Maps API (embed)

## Como Utilizar
Clone o repositório:

```bash
git clone https://github.com/seu-usuario/conectados-ao.git
```
> Abra o arquivo index.html em seu navegador para visualizar o site localmente.

## Para desenvolvimento, edite os arquivos conforme necessário:

> css/style.css para estilos principais

> css/responsive.css para ajustes responsivos

> js/script.js para comportamentos interativos

## Personalização
Para personalizar o site com suas imagens e conteúdo:

Substitua as imagens placeholder na pasta images/

logo-conectados.svg - Logotipo principal

dashboard-placeholder.png - Imagem do produto

marca1.svg a marca5.svg - Logos de clientes

integracao1.svg a integracao5.svg - Logos de integrações

Atualize as cores no arquivo CSS alterando as variáveis no :root

Modifique o conteúdo diretamente nos arquivos HTML

## Responsividade
O site foi desenvolvido com abordagem mobile-first e inclui breakpoints para:

Telas grandes (acima de 1024px)

Tablets (768px - 1024px)

Smartphones (até 768px)

## Melhorias Futuras
Implementar backend para processar formulários

Adicionar página de blog/cases de sucesso

Integrar com API de pagamento para assinaturas

Adicionar sistema de login para área do cliente

Implementar animações mais elaboradas com GSAP

## Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.

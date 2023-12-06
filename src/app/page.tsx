"use client"

import Menuzinho from "@/components/menu"
import { products } from "../../utils/products";
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { useCart } from '../../hooks/useCart';
import { useRouter } from 'next/navigation';
import { getCurrentUser } from "../../actions/getCurrentUser";

type ProductId = string;

const Home = () => {

  const router = useRouter();
  const { handleAddProductToCart } = useCart();

  const handleAddToCart = (productId: ProductId) => {
    const productToAdd = products.find((item) => item.id === productId);

    console.log(productToAdd)
    console.log(productId)

    if (productToAdd) {
      handleAddProductToCart({
        id: productToAdd.id,
        name: productToAdd.name,
        description: productToAdd.description,
        image: productToAdd.image,
        quantity: 1,
        price: productToAdd.price,
      });

      console.log("c")

      router.push('/cart');
    }
  };

  return (
    <>
      <main className='w-screen h-full overflow-x-hidden bg-brickwall bg-stylish'>
        {/* cabeçalho */}
        <div className='flex justify-center items-center translate-[50%] text-[4rem] h-[330px] w-[100%] bg-[rgba(0,0,0,0.666)] bg-fundoPastel bg-cover bg-center bg-no-repeat bg-blend-multiply'>
          <div className='relative left-[50dvw] text-white'>
            {/*@ts-ignore*/}
            <Menuzinho />
          </div>
          <h1 className='text-white text-5rem'>Cardápio</h1>
        </div>
        {/* conteudo principal */}
        <div className='w-screen flex flex-wrap justify-center bg-brickwall bg-stylish pt-5'>
          <div className='w-[90vw] h-[80px] bg-white shadow-2xl rounded-xl flex items-center justify-around overflow-hidden text-slate-700 text-[2rem]'>
            <div className='h-full w-full flex justify-center items-center border-r-4 transition-all duration-150 hover:bg-slate-100 hover:cursor-pointer hover:text-[2.3rem]'>
              <a href='#pasteis' className='w-full h-full flex justify-center items-center align-middle text-center hover:text-slate-900'>Pasteis</a>
            </div>
            <div className='h-full w-full flex justify-center items-center border-r-4 transition-all duration-150 hover:bg-slate-100 hover:cursor-pointer hover:text-[2.3rem]'>
              <a href='#doce' className='w-full h-full flex justify-center items-center align-middle text-center hover:text-slate-900'>Doce</a>
            </div>
            <div className='h-full w-full flex justify-center items-center border-r-4 transition-all duration-150 hover:bg-slate-100 hover:cursor-pointer hover:text-[2.3rem]'>
              <a href='#refri' className='w-full h-full flex justify-center items-center align-middle text-center hover:text-slate-900'>Refri</a>
            </div>
            <div className='h-full w-full flex justify-center items-center transition-all duration-150 hover:bg-slate-100 hover:cursor-pointer hover:text-[2.3rem]'>
              <a href='#aguas' className='w-full h-full flex justify-center items-center align-middle text-center hover:text-slate-900'>Águas</a>
            </div>
          </div>



          <div className='p-0 mb-1 flex flex-col basis-full items-center justify-center'>
            <div id="pasteis" className='h-full bg-center flex flex-col text-center pt-[20px] pb-[50px]'>
              <h1 className='text-black text-[3rem] pb-2 font-black tracking-wide select-none'>Pasteis</h1>
              <div className='p-0 mb-[50px] m-0 h-full w-[90dvw] grid grid-cols-2 gap-[30px] justify-center text-start'>
                {[
                  ['pdc', '/pastelDeCarne.jpg', 'pastel_com_carne.png', 'Pastel de carne', 'Pastel recheado de carne moida.', "5,00"],
                  ['pdq', '/pastel de queijo.webp', 'pastel de queijo.png', 'Pastel de queijo', 'Pastel recheado com queijo derretido.', "5,00"],
                  ['pdf', '/pastel de frango.jpg', 'pastel_com_frango.png', 'Pastel de frango', 'Pastel recheado com frango desfiado.', "5,00"],
                  ['peq', '/presunto e queijo.jpg', 'pastel_com_presunto_e_queijo.png', 'Pastel de presunto e queijo', 'Pastel recheado com uma combinação deliciosa de presunto e queijo derretido.', "5,00"],
                ].map(([id, img, img2, titulo, texto, valor], index) => (
                  <Popover key={index}>
                    <PopoverTrigger className='p-0 basis-0 w-[44dvw] h-[20dvh] grow-0 bg-white relative rounded-xl shadow-md hover:shadow-2xl cursor-pointer select-none'>
                      <div className="relative aspect-square h-full max-h-[200px] p-2 rounded-xl float-right">
                        <img src={img} className='aspect-square z-10 absolute left-0 top-0 h-full max-h-[200px] p-2 rounded-xl float-right hover:opacity-0 transition-all' />
                        <img src={img2} className='aspect-square absolute h-full left-0 top-0 max-h-[200px] p-2 rounded-xl float-right' />
                      </div>
                      <h2 className='text-[2rem] font-black mb-[5px] px-[0.625rem] pt-[8px] text-2 text-black'>{titulo}</h2>
                      <p className='pl-[10px] pb-[15px] mb-[2.5rem] text-[1.5rem] text-slate-600 whitespace-pre-line break-words'>{texto}</p>
                      <span className='absolute bottom-0 left-0 text-[1.5rem] font-[700] pb-[10px] px-[10px] text-[#909090] self-start'>POR:
                        <small className='pl-4 pb-[10px] px-[10px] text-[1.5rem] text-black'>R$: {valor}</small>
                      </span>
                    </PopoverTrigger>
                    <PopoverContent className="bg-white rounded-xl shadow-md grid grid-cols-2 w-[720px] h-520px text-black">
                      <div className='flex flex-col justify-center items-center border-r-2 border-slate-300'>
                        <h2 className='text-[1.5rem] font-black mb-[5px] px-[0.625rem] pt-[8px]'>{titulo}</h2>
                        <img src={img} className='max-h-[250px] aspect-auto p-2 rounded-xl float-right' />
                        <p className='pl-[10px] pb-[15px] text-[1.3rem] text-slate-600 whitespace-pre-line break-words'>{texto}</p>
                      </div>
                      <div className='flex flex-col scale-90'>
                        <h2 className='text-[1.5rem] font-black mb-[15px] px-[0.625rem] pt-[8px] self-center'>FAÇA SEU PEDIDO</h2>
                        <div className='pl-[10px] ml-[10px] bg-slate-200'>
                          <h2 className='text-[1.5rem] font-black'></h2>
                          <h3 className=''></h3>
                        </div>
                        <div className='mt-[25px] ml-[10px] text-[20px]'>

                        </div>
                        <div className='pl-[10px] mt-[25px] ml-[10px] bg-slate-200'>
                          <h2 className='text-[1.5rem] font-black'>Observação</h2>
                          <h3>Utilize somente para observações.</h3>
                        </div>
                        <Textarea placeholder="Observação para produto" className="m-[5px] my-[10px]" />
                        <button className='botao ml-[10px] mt-[10px]' onClick={() => handleAddToCart(id)}>Adicionar ao carrinho</button>
                      </div>
                    </PopoverContent>
                  </Popover>
                ))}
              </div>
            </div>

            <div id="doce" className='h-full bg-center flex flex-col text-center pb-[50px]'>
              <h1 className='text-black text-[3rem] pb-2 font-black tracking-wide select-none'>Doce</h1>
              <div className='p-0 m-0 h-full w-[90dvw] grid grid-cols-2 gap-[30px] justify-center text-start'>
                {[
                  ['pchoco', '/pastel de chocolate.jpg', 'pastel_de_chocolate.png', 'Pastel doce', 'Pastel recheiado com chocolate e creme de avelã.', "8,00"],
                ].map(([id, img, img2, titulo, texto, valor], index) => (
                  <Popover key={index}>
                    <PopoverTrigger className='p-0 basis-0 w-[44dvw] h-[20dvh] grow-0 bg-white relative rounded-xl shadow-md hover:shadow-2xl cursor-pointer select-none'>
                      <div className="relative aspect-square h-full max-h-[200px] p-2 rounded-xl float-right">
                        <img src={img} className='aspect-square z-10 absolute left-0 top-0 h-full max-h-[200px] p-2 rounded-xl float-right hover:opacity-0 transition-all' />
                        <img src={img2} className='aspect-square absolute h-full left-0 top-0 max-h-[200px] p-2 rounded-xl float-right' />
                      </div>
                      <h2 className='text-[2rem] font-black mb-[5px] px-[0.625rem] pt-[8px] text-2'>{titulo}</h2>
                      <p className='pl-[10px] pb-[15px] mb-[2.5rem] text-[1.5rem] text-slate-600 whitespace-pre-line break-words'>{texto}</p>
                      <span className='absolute bottom-0 left-0 text-[1.5rem] font-[700] pb-[10px] px-[10px] text-[#909090] self-start'>POR:
                        <small className='pl-4 pb-[10px] px-[10px] text-[1.5rem] text-black'>R$: {valor}</small>
                      </span>
                    </PopoverTrigger>
                    <PopoverContent className="bg-white rounded-xl shadow-md grid grid-cols-2 w-[720px] text-black">
                      <div className='flex flex-col justify-center items-center border-r-2 border-slate-300'>
                        <h2 className='text-[1.5rem] font-black mb-[5px] px-[0.625rem] pt-[8px]'>{titulo}</h2>
                        <img src={img} className='max-h-[250px] aspect-auto p-2 rounded-xl float-right' />
                        <p className='pl-[10px] pb-[15px] text-[1.3rem] text-slate-600 whitespace-pre-line break-words'>{texto}</p>
                      </div>
                      <div className='flex flex-col scale-90'>
                        <h2 className='text-[1.5rem] font-black mb-[15px] px-[0.625rem] pt-[8px] self-center'>FAÇA SEU PEDIDO</h2>
                        <div className='pl-[10px] ml-[10px] bg-slate-200'>
                          <h2 className='text-[1.5rem] font-black'></h2>
                          <h3 className=''></h3>
                        </div>
                        <div className='mt-[25px] ml-[10px] text-[20px]'>

                        </div>
                        <div className='pl-[10px] mt-[25px] ml-[10px] bg-slate-200'>
                          <h2 className='text-[1.5rem] font-black'>Observação</h2>
                          <h3>Utilize somente para observações.</h3>
                        </div>
                        <Textarea placeholder="Observação para produto" className="m-[5px] my-[10px]" />
                        <button className='botao ml-[10px]' onClick={() => handleAddToCart(id)}>Adicionar ao carrinho</button>
                      </div>
                    </PopoverContent>
                  </Popover>

                ))}
              </div>
            </div>

            <div id="refri" className='h-full bg-center flex flex-col text-center pb-[50px]'>
              <h1 className='text-black text-[3rem] pb-2 font-black tracking-wide select-none'>Refrigerante</h1>
              <div className='p-0 m-0 h-full w-[90dvw] grid grid-cols-2 gap-[30px] justify-center text-start'>
                {[
                  ['coca', '/coca cola 1l.png', 'Refrigerante Coca-Cola 1l', '', '10,00'],
                ].map(([id, img, titulo, texto, valor], index) => (
                  <Popover key={index}>
                    <PopoverTrigger className='p-0 basis-0 grow-0 relative bg-white rounded-xl shadow-md hover:shadow-2xl cursor-pointer select-none text-black'>
                      <img src={img} className='aspect-square h-full max-h-[200px] p-2 rounded-xl float-right' />
                      <h2 className='text-[2rem] font-black mb-[5px] px-[0.625rem] pt-[8px] text-2'>{titulo}</h2>
                      <p className='pl-[10px] pb-[15px] mb-[2.5rem] text-[1.5rem] text-slate-600 whitespace-pre-line break-words'>{texto}</p>
                      <span className='absolute bottom-0 left-0 text-[1.5rem] font-[700] pb-[10px] px-[10px] text-[#909090] self-start'>POR:
                        <small className='pl-4 pb-[10px] px-[10px] text-[1.5rem] text-black'>R$: {valor}</small>
                      </span>
                    </PopoverTrigger>
                    <PopoverContent className="bg-white rounded-xl shadow-md grid grid-cols-2 w-[720px] text-black">
                      <div className='flex flex-col justify-center items-center border-r-2 border-slate-300'>
                        <h2 className='text-[1.5rem] font-black mb-[5px] px-[0.625rem] pt-[8px]'>{titulo}</h2>
                        <img src={img} className='max-h-[250px] aspect-auto p-2 rounded-xl float-right' />
                        <p className='pl-[10px] pb-[15px] text-[1.3rem] text-slate-600 whitespace-pre-line break-words'>{texto}</p>
                      </div>
                      <div className='flex flex-col scale-90'>
                        <h2 className='text-[1.5rem] font-black mb-[15px] px-[0.625rem] pt-[8px] self-center'>FAÇA SEU PEDIDO</h2>
                        <div className='pl-[10px] ml-[10px] bg-slate-200 mb-[70px]'>
                        </div>



                        <button className='botao ml-[10px]' onClick={() => handleAddToCart(id)}>Adicionar ao carrinho</button>
                      </div>
                    </PopoverContent>
                  </Popover>
                ))}
              </div>
            </div>

            <div id="aguas" className='h-full bg-center flex flex-col text-center pb-[50px]'>
              <h1 className='text-black text-[3rem] pb-2 font-black tracking-wide select-none'>Águas</h1>
              <div className='p-0 m-0 h-full w-[90dvw] grid grid-cols-2 gap-[30px] justify-center text-start text-black'>
                {[
                  ['am', '/agua mineral.png', 'Água mineral', '', '2,00'],
                  ['afl', '/Aquarius fresh limão 500ml.png', 'Aquarius fresh limão 500ml', '', '6,00'],
                  ['acg', '/agua com gás.png', 'Água com gás', '', '3,50'],
                ].map(([id, img, titulo, texto, valor], index) => (
                  <Popover key={index}>
                    <PopoverTrigger className='p-0 basis-0 grow-0 relative bg-white rounded-xl shadow-md hover:shadow-2xl cursor-pointer select-none'>
                      <img src={img} className='aspect-square h-full max-h-[200px] p-2 rounded-xl float-right' />
                      <h2 className='text-[2rem] font-black mb-[5px] px-[0.625rem] pt-[8px] text-2'>{titulo}</h2>
                      <p className='pl-[10px] pb-[15px] mb-[2.5rem] text-[1.5rem] text-slate-600 whitespace-pre-line break-words'>{texto}</p>
                      <span className='absolute bottom-0 left-0 text-[1.5rem] font-[700] pb-[10px] px-[10px] text-[#909090] self-start'>POR:
                        <small className='pl-4 pb-[10px] px-[10px] text-[1.5rem] text-black'>R$: {valor}</small>
                      </span>
                    </PopoverTrigger>
                    <PopoverContent className="bg-white rounded-xl shadow-md grid grid-cols-2 w-[720px]">
                      <div className='flex flex-col justify-center items-center border-r-2 border-slate-300'>
                        <h2 className='text-[1.5rem] font-black mb-[5px] px-[0.625rem] pt-[8px]'>{titulo}</h2>
                        <img src={img} className='max-h-[250px] aspect-auto p-2 rounded-xl float-right' />
                        <p className='pl-[10px] pb-[15px] text-[1.3rem] text-slate-600 whitespace-pre-line break-words'>{texto}</p>
                      </div>
                      <div className='flex flex-col scale-90'>
                        <h2 className='text-[1.5rem] font-black mb-[15px] px-[0.625rem] pt-[8px] self-center'>FAÇA SEU PEDIDO</h2>
                        <div className='pl-[10px] ml-[10px] bg-slate-200 mb-[70px]'>
                        </div>
                        <button className='botao ml-[10px] ' onClick={() => handleAddToCart(id)}>Adicionar ao carrinho</button>
                      </div>
                    </PopoverContent>
                  </Popover>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home;
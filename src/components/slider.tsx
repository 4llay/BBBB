"use client"

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css/pagination';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog"
import { useRouter } from 'next/navigation';

const Slider = () => {

  const router = useRouter();

  return (
    <main className="w-full">
      <Swiper
        id='mySlider'
        className="mySwiper"
        loop={true}
        mousewheel={true}
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={50}
        centeredSlidesBounds={true}
        autoplay={{
          delay: 5000, // tempo de autoplay
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          910: { slidesPerView: 2 },
          1430: { slidesPerView: 3 },
        }}
        modules={[Mousewheel, Pagination, Autoplay]}>
        {[
          ['64a654593e91b8e73a351e9a','/cone_pacoca.png', 'Cone de Paçoca', "Delicioso cone trufado de sabor irresistível de paçoca, uma combinação perfeita de texturas e sabores que encantará seu paladar.", "10.00"],
          ['64a654593e91b8e73a351e9b','/cone_confete.png', 'Cone de Confete', "Divertido cone trufado repleto de confeitos coloridos, uma experiência alegre e saborosa.", "10.00"],
          ['64a654593e91b8e73a351e9c','/cone_dois_amores.png', 'Cone de Dois Amores', "Delicioso cone trufado harmonizando chocolate preto e branco, uma fusão perfeita de sabores.", "10.00"],
          ['64a654593e91b8e73a351e9d','/cone_ninho_nutella.png', 'Cone de Ninho com Nutella', "Irresistível cone trufado cremoso com Nutella e creme de leite Ninho, uma tentação inigualável.", "12.00"],
          ['64a654593e91b8e73a351e9e','/cone_oreo.png', 'Cone de Oreo', "Um apetitoso cone trufado contendo um sabor inconfundível da bolacha Oreo, uma verdadeira delícia.", "10.00"],
          ['64a654593e91b8e73a351e9f','/cone_banana.png', 'Cone de Banana', "Divertido cone trufado repleto de confeitos coloridos, uma experiência alegre e saborosa.", "10.00"],
        ].map(([id, url, text, desc, preco], index) => (
          <SwiperSlide key={index}>
            <section className="w-full h-[500px] flex flex-col items-center justify-center gap-4 drop-shadow-3xl bg-gradient-to-t from-cianinho to-rosinha rounded-2xl select-none cursor-grab dark:from-DarkMenuColor dark:to-DarkMenuColor">
              <AlertDialog>
                <AlertDialogTrigger className='flex flex-col items-center justify-between gap-12'>
                  <div>
                    <Image src={url} width={200} height={200} alt={text} className='w-[200px] h-[200px] sm:w-[290px] sm:h-[290px] rounded-[40%] border-4 border-black' />
                  </div>
                  <div>
                    <p className="text-center text-3xl xs:text-3xl tracking-tighter">
                      {text}
                    </p>
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent className='bg-white dark:bg-slate-800 shadow-3xl'>
                  <div className='text-center flex flex-col justify-center items-center select-none'>
                    <AlertDialogCancel className='absolute top-4 right-4 text-2xl font-sans hover:scale-[1.05] transition-transform'>X</AlertDialogCancel>
                    <Image src={url} width={200} height={200} alt={text} className='w-[200px] h-[200px] sm:w-[290px] sm:h-[290px] rounded-[100%] border-4 border-rosinha dark:border-cianinho' />
                    <AlertDialogTitle className='text-3xl font-sans'>{text}</AlertDialogTitle>
                    <AlertDialogDescription className='text-xl'>{desc}</AlertDialogDescription>
                    <AlertDialogDescription className='text-2xl text-black-300'>R$: {preco}</AlertDialogDescription>
                    <button className="gap-[1.5rem] flex flex-wrap mt-4 justify-center flex-grow bg-gradient-to-br from-#ffc2cc to-#add8e6 dark:bg-[linear-gradient(144deg,#AF40FF,#5B42F3_50%,#00DDEB)] shadow-[rgba(151,65,252,0.2)_0_15px_30px_-5px] box-border text-white items-center text-xl w-[90%] min-w-[140px] no-underline select-none touch-manipulation whitespace-nowrap cursor-pointer p-[3px] rounded-lg border-0"><a href={`/product/${id}`} className='bg-gray-100 text-black hover:text-white w-full h-full transition-[300ms] px-6 py-4 rounded-md hover:bg-transparent'>Ver Produto</a></button>
                  </div>
                </AlertDialogContent>
              </AlertDialog>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  )
}

export default Slider;
import Image from 'next/image';
import React from 'react';
interface Props {
	popUpModal: () => void;
}
const Terminal: React.FC<Props> = ({ popUpModal }) => {
	const buttonHeaderRef = React.useRef<HTMLUListElement>(null);
	const [miniMize, setMiniMize] = React.useState<boolean>(false);
	function miniMizePopUo() {
		setMiniMize((prev) => !prev);
	}
	return (
		<div className='absolute bg-white w-[95%] h-[95%] rounded-md shadow-md overflow-hidden border border-solid border-black'>
			<div className='flex flex-row p-4 bg-[#f5f5f5] shadow-sm rounded-t-md items-center relative border-b border-solid border-black'>
				<ul
					className='flex gap-1.5 absolute'
					ref={buttonHeaderRef}>
					<li
						className='block h-3 w-3 rounded-full bg-red-500 cursor-pointer'
						onClick={popUpModal}></li>
					<li className='block h-3 w-3 rounded-full bg-yellow-500 cursor-pointer'></li>
					<li className='block h-3 w-3 rounded-full bg-green-500'></li>
				</ul>
				<div className='w-full text-center'>
					<h1 className='text-xs capitalize font-semibold'>
						bangli skatepark
					</h1>
				</div>
			</div>
			<div className='w-full h-full p-2 overflow-x-scroll no-scrollbar'>
				<Image
					src={'/poster.jpeg'}
					width={320}
					height={320}
					alt='poster'
					className='float-left'
				/>
				<h1 className='text-6xl capitalize'>
					bupati cup skateboard competition i
				</h1>
				<p className='text-justify'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Perferendis commodi velit quos doloribus error autem
					architecto unde officiis distinctio eaque, excepturi amet
					reiciendis explicabo. Aliquam est perspiciatis reprehenderit
					consectetur enim. Reiciendis minus aliquam aliquid, cumque
					molestiae esse mollitia nam numquam quia cum ex eum
					similique a hic natus rerum omnis temporibus optio accusamus
					nesciunt architecto illo! Dolore totam sint amet.
					Necessitatibus, eos quam totam officia, sapiente illum
					corrupti dolor, mollitia fuga amet obcaecati ab distinctio
					eaque quos odio. Vel quasi commodi dignissimos voluptatem
					voluptatibus magni aperiam earum facilis fugiat veniam.
					Consequuntur in voluptatibus reiciendis doloribus, totam ad
					dolores magni facere voluptates ratione aliquam odio illum,
					optio voluptatum, quidem ipsa laborum similique a at nihil!
					Esse, minima molestias? Magni, natus facilis? Soluta
					voluptates architecto explicabo dolorum corrupti recusandae
					incidunt tenetur quam maxime provident eius consectetur
					delectus laborum iusto quae veniam nam non officiis culpa
					voluptas, sunt repudiandae esse odit facilis? Cum? Inventore
					veniam pariatur sequi voluptates asperiores aliquam rem
					eligendi hic consequatur molestias, excepturi cum alias iure
					eos iste impedit totam nostrum quidem? Obcaecati alias earum
					eum velit autem molestiae quod? Praesentium cumque aliquam
					aut suscipit, ab ad consequatur hic, doloribus vero,
					cupiditate deserunt porro dicta quasi voluptatem iste et.
					Ratione, laborum accusamus. Excepturi, corporis provident
					doloribus aliquam ex illum incidunt. Optio magnam
					exercitationem qui a nesciunt ullam odio sit minus nisi! Ab
					natus minus amet voluptatem incidunt voluptates voluptatibus
					delectus omnis quae perferendis doloribus placeat eveniet,
					neque illo id nam. Reprehenderit ratione adipisci quisquam,
					minus esse optio similique et ipsum quos nesciunt cumque.
					Temporibus cumque deserunt labore accusamus amet. Voluptates
					repellat sint ex consectetur minima voluptatem possimus
					consequuntur sapiente sunt. Perspiciatis, officiis.
					Doloribus nam labore consectetur eius, perspiciatis
					architecto non! Totam sunt et facere vitae exercitationem
					odio similique ad eius ipsum. Repudiandae asperiores
					adipisci sunt! Voluptates cum ratione dolores nulla! Iusto
					tempore blanditiis placeat maiores expedita omnis dolor
					neque odio sit provident aut quibusdam cum dignissimos,
					odit, impedit voluptatibus atque aspernatur illum fugit
					explicabo repellat dicta? Dicta harum doloremque fugit! Quam
					temporibus est quaerat. Aut officiis, culpa quisquam
					laboriosam consequuntur quae at vero temporibus! Nihil,
					dignissimos! Provident aliquam quisquam obcaecati. Officiis
					a soluta dolorem voluptate molestiae animi? Dicta, ratione.
					Rem. Facere repellendus delectus obcaecati quod voluptates
					suscipit fuga, pariatur quidem enim debitis aliquam adipisci
					rem omnis repudiandae vitae reprehenderit totam? Nostrum
					tenetur beatae vitae, nobis in modi assumenda illo ab.
					Tenetur, adipisci consequatur consectetur magni amet
					perspiciatis totam? Beatae provident qui alias! Iusto amet
					deleniti temporibus quae, magnam illo officiis accusantium
					reprehenderit molestiae quos est accusamus ratione! Dicta,
					id amet! Ab officiis aliquam facere, deserunt eveniet dolore
					architecto debitis tempora esse voluptate molestias
					perspiciatis quibusdam, aperiam minus! Placeat praesentium
					repellat aliquid reiciendis quisquam tempora aspernatur,
					sequi perspiciatis ratione consequuntur cumque. At sit
					laborum in, ratione pariatur molestiae odit magni sed dolore
					fugit consectetur praesentium soluta fuga tempora esse
					placeat nostrum ipsam laboriosam debitis? Eveniet error
					laboriosam, deleniti numquam harum labore. Ut neque ipsa
					deserunt quod mollitia laboriosam magnam, ea, placeat
					dolores aut ex beatae quisquam cum praesentium eligendi
					porro atque, suscipit natus est perspiciatis! Nostrum sit
					culpa voluptas consectetur totam? Soluta illo aliquid
					laborum consectetur sint ex voluptates labore obcaecati
					voluptatibus, perferendis molestiae itaque maxime amet
					beatae mollitia quasi nesciunt modi! Qui animi
					exercitationem, dolores omnis aliquam beatae accusamus
					quidem. Explicabo nulla magni, voluptatum labore ea totam
					qui aliquid architecto ipsam quis quae recusandae ullam quam
					consequuntur, atque, impedit fugiat eius eveniet vero illo
					libero veritatis corporis? Fugiat, neque ad! Sunt
					reprehenderit minus provident dicta voluptas. Fugiat aliquam
					illum voluptas eos atque iusto. Sit, libero? Natus ad quae
					aperiam explicabo modi, tempora corporis illum repudiandae
					architecto ut perspiciatis quisquam nemo.
				</p>
			</div>
		</div>
	);
};

export default Terminal;

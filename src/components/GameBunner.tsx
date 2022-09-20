interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBunner(props: GameBannerProps){
  return(
    <a href="" className='relative rounded-lg overflow-hidden'>
    <img src={props.bannerUrl} alt="" />
    
    <div className="w-full pt-16 pb-4 pdx-4 bg-game-gradient absolute bottom-0 left-0 right-0">
      <strong className='font-bold text-white block'>
        {props.title}
      </strong>
      <span className="text-sm text-zinc-400 block">
      {props.adsCount} {props.adsCount<2? "anúncio" : "anúncios"  }
      </span>
    </div>
  </a>
  )
}

interface GameBannerProps {
    title: string
    bannerUrl: string;
    adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
    return (
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src={props.bannerUrl} alt="" />
          <div className="absolute bottom-0 left-0 right-0 w-full bg-game-gradient pt-16 pb-4 px-4">
            <strong className="block text-white font-bold">{props.title}</strong>
            <span className="text-zinc-300 font-sm">{props.adsCount} anúncio(s)</span>
          </div>
        </a>
    )
}
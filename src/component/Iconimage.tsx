interface IProps{

src:string
className?:string;
}

const Iconimage= ({src,className="w-5 h-5"}:IProps) => {
  return (
    <div>
      {<img src={src} className={className}/>}
    </div>
  )
}

export default Iconimage;
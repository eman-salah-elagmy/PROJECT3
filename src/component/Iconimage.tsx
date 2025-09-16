interface IProps{

src:string
}

const Iconimage= ({src}:IProps) => {
  return (
    <div>
      {<img src={src} className="w-5 h-5"/>}
    </div>
  )
}

export default Iconimage;
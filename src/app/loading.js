import style from "./style.module.css"
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <>
<div className={style.loadingspinner}>
  <div id={style.square1}></div>
  <div id={style.square2}></div>
  <div id={style.square3}></div>
  <div id={style.square4}></div>
  <div id={style.square2}></div>
</div>
        </>
    )
  }
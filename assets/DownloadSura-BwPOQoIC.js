import{l as i,f as d,b as l,d as c,g as n,n as w,i as u}from"./index-BqTUEpmq.js";const m=["href","download"],v={__name:"DownloadSura",props:{sueraUrl:String,suraName:String},setup(r){const a=r,s=async()=>{try{const t=await u.get(a.sueraUrl,{responseType:"blob"}),e=window.URL.createObjectURL(t.data),o=document.createElement("a");o.href=e,o.download=a.suraName+".mp3",document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(e)}catch(t){console.error("Error downloading audio file:",t)}};return(t,e)=>{const o=i("tooltip");return d((l(),c("a",{href:r.sueraUrl,onClick:e[0]||(e[0]=w(p=>s(),["prevent"])),download:r.suraName},e[1]||(e[1]=[n("svg",{class:"w-6 h-6 text-gray-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[n("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"})],-1)]),8,m)),[[o,"تحميل",void 0,{top:!0}]])}}};export{v as _};

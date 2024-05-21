gsap.registerPlugin(ScrollTrigger);


const pageone = function () {
  setInterval(function () {
    gsap.to("#linep1", {
      width: "100vw",
      // delay:0.2,
      duration: 2.5,
    });
  }, 3000);

  setInterval(function () {
    // document.querySelector("#linep1").style.display='none';
    document.querySelector("#linep1").style.width = "0vw";
  }, 1000);

  setInterval(function () {
    document.querySelector(
      "#imgsectionin"
    ).src = `./photos/darla-hueske-TthIOdvmrVk-unsplash.jpg`;
  }, 3000);
  setInterval(function () {
    document.querySelector(
      "#imgsectionin"
    ).src = `./photos/mirko-fabian-fgolx9gZfVA-unsplash.jpg`;
  }, 6000);
  setInterval(function () {
    document.querySelector("#imgsectionin").src =
      "https://images.unsplash.com/photo-1617717540480-11274a9e28c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80";
  }, 9000);

  setInterval(function () {
    document.querySelector("#imgsectionin").src =
      "https://images.unsplash.com/photo-1655048423906-67bd4514a7ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80";
  }, 12000);

  setInterval(function () {
    document.querySelector("#imgsectionin").src =
      "https://plus.unsplash.com/premium_photo-1661909508766-1640065cc645?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80";
  }, 15000);
};

pageone();





// #pagenone  


var it=gsap.timeline();


it







.from('#contaun4',{
   opacity:0,
   delay:0.5,
   onStart:function(){
      $('#contaun4').textillate({ 
         in: { effect: 'fadeInUp',
         callback:function(){
            $('#contaun4').textillate('out');
         }
      } ,
         out:{effect:'fadeOutUp'}   
      });
      
  
   }
})


.from('#name>p',{
  opacity:0,
  onStart:function(){
     $('#name>p').textillate({ 
        in: { effect: 'fadeOutIn',
     }    
 
     });

     
 
  },
})


.from('#contaun3',{
   opacity:0,
   delay:0.5,
   onStart:function(){
      $('#contaun3').textillate({ 
         in: { effect: 'fadeInUp',
         callback:function(){
            $('#contaun3').textillate('out');
         }
      } ,
         out:{effect:'fadeOutUp'}   
      });
      
  
   }
})


.from('#imgnone',{
opacity:0,   
})




.from('#contaun2',{
   opacity:0,
   delay:0.5,
   onStart:function(){
      $('#contaun2').textillate({ 
         in: { effect: 'fadeInUp',
         callback:function(){
            $('#contaun2').textillate('out');
         }
      } ,
         out:{effect:'fadeOutUp'}   
      });
      
  
   }
})
.to('#pagenone>#textpagenone>h1',{
  opacity:1,

  onStart:function(){
     $('#pagenone>#textpagenone>h1').textillate({ 
        in: { effect: 'fadeInLeft',
     }   
 
     });

     
 
  },
})




.from('#contaun1',{
   opacity:0,
   delay:0.5,
   onStart:function(){
      $('#contaun1').textillate({ 
         in: { effect: 'fadeInUp',
         callback:function(){
            $('#contaun1').textillate('out');
         }
      } ,
         out:{effect:'fadeOutUp'}   
      });
      
  
   }
})








.to('#pagenone',{
  //  delay:2,
   top:-1000,
   duration:2,


})




gsap.from('#page1>#centrep1>h1',{
  onStart:function(){
     $('#page1>#centrep1>h1').textillate({ 
        in: { effect: 'swing',
     }   
 
     });

 
  },

})









// #page2 start

const page2first = function () {
  let cluttertwo = "";

  let pagetwo = [
    { owner:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      name:"akku verma",
     img: "https://agfundernews.com/wp-content/uploads/2022/08/281832544_4872557739523316_4916680536175142455_n.jpeg" },
    {owner:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      name:"anil pandey",
       img: "https://www.deere.com/assets/images/region-4/products/tractors/utility-tractors/5e-series-utility-tractors/089653_R1-1024x576.jpg",
    },
    {owner:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
       name:"anil pandey",
      img: "https://www.agrifarming.in/wp-content/uploads/2019/01/Importance-of-Tractors-in-Agriculture..jpg",
    },
    {owner:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      name:"anil pandey",
       img: "https://extension.umaine.edu/agriculture/wp-content/uploads/sites/14/2017/03/tractor-1.jpg" },
    {owner:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      name:"anil pandey",
      img: "https://www.mahindratractor.com/BlogImage/BlogDetails/Image/Choosing-the-Right-Implements-for-Rice-Farming_637824537654252852.jpg",

    },
    {owner:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      name:"anil pandey",
      img: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/6/Desk/2022_6$largeimg_1803425654.jpg",
    },
    {owner:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      name:"anil pandey",
      img: "https://4.bp.blogspot.com/-pxru_dQYz7o/WRSAMf5OE2I/AAAAAAAAAE0/qCYaQM8ZwB0biycfxG8_604ckF5JkCnTwCLcB/s1600/utility-tractors.jpg",
    },
    {owner:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      name:"anil pandey",
      img: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-815371,resizemode-1,msid-76269872/news/economy/agriculture/tractor-makers-explore-rental-route-as-agricultural-economy-grows.jpg",
    },
  ];

  pagetwo.forEach(function (val, index) {
    cluttertwo += `          <div class="innerdiv" id="innerdiv${index}">
   <div class="imgdiv" id="imgdiv${index}">
   <div id="upperp2${index}" class="upperp2">
                     
   </div>
     <img
       src="${val.img}"
       alt=""/>
   </div>

   <div id="textareap2${index}" class="textareap2">
      <div id="textnav" class="textnav">
         
         <img src="${val.owner}" alt="">
         <h1>${val.name}</h1>
         
      </div>
      <div id="textnav2" class="textnav2">
         <ul>
            <li><i class="ri-map-pin-fill"></i>: sulatnpur dist raisen</li>
            <li><i class="ri-money-dollar-circle-line"></i>: For Rent ::id-156875</li>
            <li><i <i class="ri-phone-line"></i>: 9895545665</li>

            </ul>
      </div>

   </div>
   




 </div>`;
  });
  document.querySelector("#div1").innerHTML = cluttertwo;
};

page2first();

let down = function () {
  for (let i = 0; i <= 7; i++) {
    document
      .querySelector(`#innerdiv${i}`)
      .addEventListener("mousemove", function () {
        gsap.to(`#textareap2${i}`, {
          top: "79%",
        });
        gsap.from(`#upperp2${i}`, {
          top: "-90%",
          transition: 1,
        });
        gsap.to(`#div1 #innerdiv${i} #imgdiv${i} img`,{
           scale:1.2,
        })
      });
  }

  for (let i = 0; i <= 7; i++) {
    document
      .querySelector(`#innerdiv${i}`)
      .addEventListener("mouseleave", function () {
        gsap.to(`#textareap2${i}`, {
          top: "6.5%",
          
        });
        gsap.to(`#upperp2${i}`, {
          top: "50%",
          transition: 1,
        });

        gsap.to(`#div1 #imgdiv${i} img`,{
           scale:1,
        })
      });
  }
};

down();

// #page3 clutter
const page2second = function () {
  let clutterthree = "";

  let pagethree = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaR0BzH7pM8p4RQ4FQQHlCpQxM1SldSIuFfMh9RvcjqU4rLEodU2rb982Z8cf_RCwI8mY&usqp=CAU",
    },
    {
      img: "https://www.shutterstock.com/image-photo/combine-harvester-on-wheat-field-260nw-1714254739.jpg",
    },
    {
      img: "https://www.kubota.co.in/products/harvester/images/img_overview.jpg",
    },
    { img: "https://kubota.com.mm/en/products/images/img_panel_harvester.jpg" },
    {
      img: "https://img.freepik.com/premium-photo/combine-harvester-working-corn-field-during-harvest_234715-1339.jpg?w=2000",
    },
    {
      img: "https://image.made-in-china.com/2f0j00NUjfGSngCWzb/Zoomlion-AC60b-Combine-Sugarcane-Harvester-Agricultural-Machinery.jpg",
    },
    { img: "https://i.ytimg.com/vi/Bpwa-skBaEo/maxresdefault.jpg" },
    {
      img: "https://www.tractorjunction.com/assets/images/images/implementTractor/sugar-cane-harvester-austoft-8000-1649326150.jpg",
    },
  ];

  pagethree.forEach(function (val, index) {
    clutterthree += `<div class="innerdiv" id="innerdiv2${index}">
   <div class="imgdiv" id="imgdiv">
  
   <img
       src="${val.img}" 
       alt=""/>
   </div>

   <div id="textareap2${index}" class="textareap2">
      <div id="textnav" class="textnav">
         
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdMMV2Da_hpY_U0gMPKmYDXgyrepegYuNhAw&usqp=CAU" alt="">
         <h1>claint name</h1>
         
      </div>
      <div id="textnav2" class="textnav2">
         <ul>
            <li><i class="ri-map-pin-fill"></i> :sulatnpur dist raisen</li>
            <li><i class="ri-money-dollar-circle-line"></i>: For Rent ::id-125476</li>
            <li><i <i class="ri-phone-line"></i>: 9895545665</li>

            </ul>
      </div>

   </div>
   
 </div>`;
  });
  document.querySelector("#div2").innerHTML = clutterthree;

  for (let i = 0; i <= 7; i++) {
    document
      .querySelector(`#innerdiv2${i}`)
      .addEventListener("mousemove", function () {
        gsap.to(`#textareap2${i}`, {
          top: "82%",
        });
      });
  }

  for (let i = 0; i <= 7; i++) {
    document
      .querySelector(`#innerdiv2${i}`)
      .addEventListener("mouseleave", function () {
        gsap.to(`#textareap2${i}`, {
          top: "6.5%",
        });
      });
  }
};

page2second();

// page3 clutterthree end

page2third = function () {
  clutterfour = "";

  let pagefour = [
    {
      img: "https://image.made-in-china.com/2f0j00LFQtlrhzYWqd/Farm-Machinery-Rotavator-Cultivator-Rotary-Tiller.jpg",
    },
    {
      img: "https://5.imimg.com/data5/GQ/CW/MY-12487517/agricultural-rotavator-500x500.jpg",
    },
    {
      img: "https://image.made-in-china.com/2f0j00fJFWQrTUbjoN/Farm-Machinery-Accessories-Tractor-Rototiller-3-Point-Rotary-Tiller-Cultivator-Rotavator-for-Sale.jpg",
    },
    { img: "https://cdn.moglix.com/p/I/P/T/d/MINIPTKYIZKWW-xxlarge.jpg" },
    {
      img: "https://img.agriexpo.online/images_ag/photo-mg/173788-11998772.jpg",
    },
    {
      img: "https://sc04.alicdn.com/kf/He99e122e80424ec79893044bdbe97327g.jpg",
    },
    { img: "http://sc04.alicdn.com/kf/HTB1wpFaB4uTBuNkHFNRq6A9qpXa1.jpg" },
    {
      img: "https://northstarattachments.com/assets/products/attachments/3-1-soil-conditioner@2x.jpg",
    },
  ];

  pagefour.forEach(function (val, index) {
    clutterfour += `<div class="innerdiv" id="innerdiv3${index}">
   <div class="imgdiv" id="imgdiv">
     <img
       src="${val.img}" 
       alt=""/>
   </div>

   <div id="textareap2${index}" class="textareap2">
      <div id="textnav" class="textnav">
         
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdMMV2Da_hpY_U0gMPKmYDXgyrepegYuNhAw&usqp=CAU" alt="">
         <h1>claint name</h1>
         
      </div>
      <div id="textnav2" class="textnav2">
         <ul>
            <li><i class="ri-map-pin-fill"></i> :sulatnpur dist raisen</li>
            <li><i class="ri-money-dollar-circle-line"></i>: For Rent :: id-12515896</li>
            <li><i <i class="ri-phone-line"></i>: 9895545665</li>
         
            </ul>
      </div>

   </div>
   
 </div>`;
  });

  document.querySelector("#div3").innerHTML = clutterfour;

  for (let i = 0; i <= 7; i++) {
    document
      .querySelector(`#innerdiv3${i}`)
      .addEventListener("mousemove", function () {
        gsap.to(`#textareap2${i}`, {
          top: "82.5%",
        });
      });
  }

  for (let i = 0; i <= 7; i++) {
    document
      .querySelector(`#innerdiv3${i}`)
      .addEventListener("mouseleave", function () {
        gsap.to(`#textareap2${i}`, {
          top: "6.5%",
        });
      });
  }
};
page2third();

// page3 clutterfour end

page2four = function () {
  clutterfive = "";

  let pagefive = [
    { img: "https://m.media-amazon.com/images/I/71oBd-FfDnL._SL1500_.jpg" },
    {
      img: "https://5.imimg.com/data5/PA/OT/SJ/SELLER-21184898/comet-cub-5hp-engine-driven-regular-water-pump-set-1000x1000.jpg",
    },
    {
      img: "https://mlhobevaucyf.i.optimole.com/w:1200/h:742/q:mauto/https://novo3ds.in/wp-content/uploads/2022/08/AG217_Kishankraft_1.jpg",
    },
    {
      img: "https://i0.wp.com/theconstructor.org/wp-content/uploads/2020/08/Pumps.jpg?fit=500%2C500&ssl=1",
    },
    {
      img: "https://grekkon-eldoret.co.ke/wp-content/uploads/2019/11/Diesel-Water-Pumps-in-Kenya-7.jpeg",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthZ5xQAAc2opP4KxdRk25IusrVSEja46G5A&usqp=CAU",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX57u_NsxGNwaNOQf03OZqE9MKoqBBV_jpHQ&usqp=CAU",
    },
    { img: "http://sc04.alicdn.com/kf/H847d5fa58d85421ba1644503ff86ab2cw.jpg" },
  ];

  pagefive.forEach(function (val, index) {
    clutterfive += `<div class="innerdiv" id="innerdiv4${index}">
   <div class="imgdiv" id="imgdiv">
     <img
       src="${val.img}" 
       alt=""/>
   </div>

   <div id="textareap2${index}" class="textareap2">
      <div id="textnav" class="textnav">
         
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdMMV2Da_hpY_U0gMPKmYDXgyrepegYuNhAw&usqp=CAU" alt="">
         <h1>claint name</h1>
         
      </div>
      <div id="textnav2" class="textnav2">
         <ul>
            <li><i class="ri-map-pin-fill"></i> :sulatnpur dist raisen</li>
            <li><i class="ri-money-dollar-circle-line"></i>: For Rent :: id-2585548</li>
            <li><i <i class="ri-phone-line"></i>: 9895545665</li>
         
            </ul>
      </div>

   </div>
   
 </div>`;
  });

  document.querySelector("#div4").innerHTML = clutterfive;

  for (let i = 0; i <= 7; i++) {
    document
      .querySelector(`#innerdiv4${i}`)
      .addEventListener("mousemove", function () {
        gsap.to(`#textareap2${i}`, {
          top: "81%",
        });
      });
  }

  for (let i = 0; i <= 7; i++) {
    document
      .querySelector(`#innerdiv4${i}`)
      .addEventListener("mouseleave", function () {
        gsap.to(`#textareap2${i}`, {
          top: "6.5%",
        });
      });
  }
};
page2four();

let shift = function () {

  document.querySelector("#tractors").addEventListener("click", function () {
    $(".sec-two_nav_links").removeClass("active")
    this.classList.add("active")
    document.querySelector("#div3").style.left = "-100%";
    document.querySelector("#div2").style.left = "-100%";
    document.querySelector("#div4").style.left = "-100%";
    gsap.to("#div2", {
      left: "500%",
    });
  });
  
  document.querySelector("#harvester").addEventListener("click", function () {
    $(".sec-two_nav_links").removeClass("active")
    this.classList.add("active")
    document.querySelector("#div3").style.left = "-100%";
    document.querySelector("#div4").style.left = "-100%";
    gsap.to("#div2", {
      left: "50%",
    });
  });

  document.querySelector("#rotervater").addEventListener("click", function () {
    $(".sec-two_nav_links").removeClass("active")
    this.classList.add("active")
    document.querySelector("#div2").style.left = "-100%";
    document.querySelector("#div4").style.left = "-100%";
    gsap.to("#div3", {
      left: "50%",
    });
  });

  document.querySelector("#waterpumps").addEventListener("click", function () {
    $(".sec-two_nav_links").removeClass("active")
    this.classList.add("active")
    gsap.to("#div4", {
      left: "50%",
    });
  });
};

shift();

// #page2 complete

var page31 = function () {
  let clutterp31 = "";

  const page3first = [
    {
      img: "https://images.unsplash.com/photo-1580901369227-308f6f40bdeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    },
    {
      img: "https://media.istockphoto.com/id/1283895179/photo/jcb-crane-working-near-sand-quarry.jpg?s=612x612&w=0&k=20&c=DAESMJ9vd1vzUW1JznFoWBSkdZkBUSTM5zyTZPCzLHs=",
    },
  ];
  page3first.forEach(function (val, index) {
    clutterp31 += ` <div id="firstp3${index}" class="firstp3">
               
   <div id="imgfirstp3${index}" class="imgfirstp3">
   <div id="upper${index}" class="upper"></div>
      <img  src="${val.img}" alt="">
   </div>
   
   
   </div>`;
  });
  document.querySelector("#containerp3").innerHTML = clutterp31;
};

page31();

// first image large
  document.querySelector("#firstp30").addEventListener("mousemove", function () {
    console.log("enter");
    
    gsap.to("#firstp30>.imgfirstp3>img", {
      scale:1.2
    });

    gsap.to("#upper0",{
      top:"-100%",
      transition:0.3
    })

  });
  
  
  document.querySelector("#firstp30").addEventListener("mouseleave", function () {
    console.log("enter");
    
    gsap.to("#firstp30>.imgfirstp3>img", {
      scale:1
    });
    gsap.to("#upper0",{
      top:"50%",
      transition:0.3
    })
  });
  
  // second image

  document.querySelector("#firstp31").addEventListener("mousemove", function () {
    console.log("enter");
    
    gsap.to("#firstp31>.imgfirstp3>img", {
      scale:1.2
    });
    gsap.to("#upper1",{
      top:"-100%",
      transition:0.3
    })
  });
  
  
  document.querySelector("#firstp31").addEventListener("mouseleave", function () {
    console.log("enter");
    
    gsap.to("#firstp31>.imgfirstp3>img", {
      scale:1
    });
    gsap.to("#upper1",{
      top:"50%",
      transition:0.3
    })
  });







// page3 first clutter end

let page32 = function () {
  let clutterp32 = "";

  const page3second = [
    {
      img: "https://www.krishnaborewell.com/images/resource/borewell-drilling-process.jpg",
    },
    {
      img: "https://www.tatamotors.com/wp-content/uploads/2020/08/13065450/press-13aug20-lowres.jpg",
    },
  ];
  page3second.forEach(function (val, index) {
    clutterp32 += `<div id="firstp32${index}" class="firstp3">
               
   <div id="imgfirstp32${index}" class="imgfirstp3">
   <div id="upper2${index}" class="upper"></div>
      <img src="${val.img}" alt="">
   </div>
   
   
   </div>`;
  });
  document.querySelector("#containerp32").innerHTML = clutterp32;
};

page32();


// second image large
document.querySelector("#firstp320").addEventListener("mousemove", function () {
  console.log("enter");
  
  gsap.to("#firstp320>.imgfirstp3>img", {
    scale:1.2,
  });
  gsap.to("#upper20",{
    top:"-100%",
    transition:0.3
  })

});


document.querySelector("#firstp320").addEventListener("mouseleave", function () {
  console.log("enter");
  
  gsap.to("#firstp320>.imgfirstp3>img", {
    scale:1
  });
  gsap.to("#upper20",{
    top:"50%",
    transition:0.3
  })
});

// second image

document.querySelector("#firstp321").addEventListener("mousemove", function () {
  console.log("enter");
  
  gsap.to("#firstp321>.imgfirstp3>img", {
    scale:1.2
  });

  gsap.to("#upper21",{
    top:"-150",
    transition:0.3
  })

});


document.querySelector("#firstp321").addEventListener("mouseleave", function () {
  console.log("enter");
  
  gsap.to("#firstp321>.imgfirstp3>img", {
    scale:1
  });
  gsap.to("#upper21",{
    top:"50%",
    transition:0.3
  })

});



// #page3rightstarts




let page33 = function () {
  clutterp3r1 = "";

  let page3right = [
    {
      img: "https://images.unsplash.com/photo-1580901369227-308f6f40bdeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    },
    {
      img: "https://1.bp.blogspot.com/-4B4jD6sK5T8/XQDb_xzFw0I/AAAAAAAAAYk/iDWwGJYyecA8aEKQyDqIUGvZPPPHmNvRACLcBGAs/s1600/jcb01.jpg",
    },
    {
      img: "https://www.krishnaborewell.com/images/resource/borewell-drilling-process.jpg",
    },
    {
      img: "https://www.tatamotors.com/wp-content/uploads/2020/08/13065450/press-13aug20-lowres.jpg",
    },
  ];

  page3right.forEach(function (val, index) {
    clutterp3r1 += `<div id="rcmain${index}" class="rcmain" >
      <div id="imgrcentre" class="imgrcentre">
         <img  src="${val.img}" alt="">
      </div>
   
      <div id="navrp3${index}" class="navrp3">

      <img src="https://st2.depositphotos.com/1662991/8837/i/450/depositphotos_88370500-stock-photo-mechanic-wearing-overalls.jpg" alt="">

      <h1>rhandre shokai</h1>
      <ul>
         <li><i class="ri-map-pin-line"></i> :: california </li>
         <li><i class="ri-money-dollar-box-fill"></i> ::id-9852335</li>

      </ul>
      <h2><i class="ri-phone-fill"></i> :: 9098229303</h2>


      </div>
   </div>
   `;
  });

  document.querySelector("#rcentrep3").innerHTML = clutterp3r1;
};

page33();


















// #page33 all cleater end

document.querySelector("#poclain").addEventListener("click", function () {
  console.log("enter");
  document.querySelector("#rcmain2").style.display = "none";
  document.querySelector("#rcmain3").style.display = "none";
  document.querySelector("#rcmain1").style.display = "none";

  document.querySelector("#rcmain3").style.opacity = "0";
  document.querySelector("#rcmain1").style.opacity = "0";
  document.querySelector("#rcmain2").style.opacity = "0";

  gsap.to("#rcmain0", {
    display: "flex",
    transition: 0.3,
    opacity: 1,
  });
});

document.querySelector("#jcb").addEventListener("click", function () {
  document.querySelector("#rcmain2").style.display = "none";
  document.querySelector("#rcmain0").style.display = "none";
  document.querySelector("#rcmain3").style.display = "none";

  document.querySelector("#rcmain3").style.opacity = "0";
  document.querySelector("#rcmain0").style.opacity = "0";
  document.querySelector("#rcmain2").style.opacity = "0";

  gsap.to("#rcmain1", {
    display: "flex",
    opacity: 1,
    transition: 0.3,
  });
});

document.querySelector("#borewell").addEventListener("click", function () {
  document.querySelector("#rcmain3").style.display = "none";
  document.querySelector("#rcmain0").style.display = "none";
  document.querySelector("#rcmain1").style.display = "none";

  document.querySelector("#rcmain3").style.opacity = "0";
  document.querySelector("#rcmain1").style.opacity = "0";
  document.querySelector("#rcmain0").style.opacity = "0";

  gsap.to("#rcmain2", {
    display: "flex",
    opacity: 1,
    transition: 0.3,
  });
});

document.querySelector("#truck").addEventListener("click", function () {
  document.querySelector("#rcmain2").style.display = "none";
  document.querySelector("#rcmain0").style.display = "none";
  document.querySelector("#rcmain1").style.display = "none";

  document.querySelector("#rcmain0").style.opacity = "0";
  document.querySelector("#rcmain1").style.opacity = "0";
  document.querySelector("#rcmain2").style.opacity = "0";

  gsap.to("#rcmain3", {
    display: "flex",
    opacity: 1,
    transition: 0.3,
  });
});

// end khatam tata by by

// one

document.querySelector("#firstp30").addEventListener("click", function () {
  console.log("enter");
  document.querySelector("#rcmain2").style.display = "none";
  document.querySelector("#rcmain3").style.display = "none";
  document.querySelector("#rcmain1").style.display = "none";

  document.querySelector("#rcmain3").style.opacity = "0";
  document.querySelector("#rcmain1").style.opacity = "0";
  document.querySelector("#rcmain2").style.opacity = "0";

  gsap.to("#rcmain0", {
    display: "flex",
    transition: 0.3,
    opacity: 1,
  });
});

//  two

document.querySelector("#firstp31").addEventListener("click", function () {
  document.querySelector("#rcmain2").style.display = "none";
  document.querySelector("#rcmain0").style.display = "none";
  document.querySelector("#rcmain3").style.display = "none";

  document.querySelector("#rcmain3").style.opacity = "0";
  document.querySelector("#rcmain0").style.opacity = "0";
  document.querySelector("#rcmain2").style.opacity = "0";

  gsap.to("#rcmain1", {
    display: "flex",
    opacity: 1,
    transition: 0.3,
  });
});

// three
document.querySelector("#firstp320").addEventListener("click", function () {
  document.querySelector("#rcmain3").style.display = "none";
  document.querySelector("#rcmain0").style.display = "none";
  document.querySelector("#rcmain1").style.display = "none";

  document.querySelector("#rcmain3").style.opacity = "0";
  document.querySelector("#rcmain1").style.opacity = "0";
  document.querySelector("#rcmain0").style.opacity = "0";

  gsap.to("#rcmain2", {
    display: "flex",
    opacity: 1,
    transition: 0.3,
  });
});

// fourth

document.querySelector("#firstp321").addEventListener("click", function () {
  document.querySelector("#rcmain2").style.display = "none";
  document.querySelector("#rcmain0").style.display = "none";
  document.querySelector("#rcmain1").style.display = "none";

  document.querySelector("#rcmain0").style.opacity = "0";
  document.querySelector("#rcmain1").style.opacity = "0";
  document.querySelector("#rcmain2").style.opacity = "0";

  gsap.to("#rcmain3", {
    display: "flex",
    opacity: 1,
    transition: 0.3,
  });
});

// #page4

let clutterp4 = "";

let page4 = [
  {
    
    img: "https://img.agriexpo.online/images_ag/photo-g/168330-16935905.webp" },
  {
    img: "https://cms-static.wehaacdn.com/hayandforage-com/images/M8_ph__1.3598.widea.1.jpg",
  },
  {
    img: "https://www.plantandequipment.news/wp-content/uploads/2021/09/emag-jcb-cover-imgs.jpg",
  },
];

page4.forEach(function (val, index) {
  clutterp4 += ` <div id="c1p4${index}" class="c1p4">

  
<div id="imgp4${index}" class="imgp4" >
<img src="${val.img}" alt="">

</div>
   <div id="textareap4">

      <div id="centrep42">
      <div id="datetime">
         <ul>
            <li><i class="ri-calendar-2-line"></i> AUG,27,2020</li>
            <li><i class="ri-user-settings-fill"></i> ADMIN</li>
            <li><i class="ri-chat-3-fill"></i>  3</li>
         </ul>
      </div>
      <h1>New farming Equipment To Launch</h1>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...</p>
      <button>read more</button>
   </div>
   </div>



   </div>`;
});
document.querySelector("#centrep4").innerHTML = clutterp4;







for(let i=0;i<=2;i++){
  document.querySelector(`#imgp4${i}`).addEventListener("mousemove",function(){
    gsap.to(`#imgp4${i}>img`,{
      scale:1.2, 
    })
    
    })
    
    document.querySelector(`#imgp4${i}`).addEventListener("mouseleave",function(){
    gsap.to(`#imgp4${i}>img`,{
      scale:1, 
    })
    
    })
    

}



























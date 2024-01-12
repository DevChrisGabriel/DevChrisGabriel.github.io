$('.owl-carousel').owlCarousel({
    stagePadding: 30,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })


  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }

    });
});
  

const hiddenElements = document.querySelectorAll('#hidden');
Array.from(hiddenElements).forEach((el) => observer.observe(el));


var player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14, player15;
var videoSrc = ["https://www.youtube.com/embed/V-4oMnmu47Q?si=SUOMr9B9Mpz0D1Fz",
                "https://www.youtube.com/embed/J8DGjUv-Vjc?si=gt3mw5T3dKKF1mZ8",
                "https://www.youtube.com/embed/Hkw25moJV5I?si=zxSXQqNQgTCdJmqR",
                "https://www.youtube.com/embed/E2HnFr8jgCQ?si=pFyjyUbDgwEa8Zur",
                "https://www.youtube.com/embed/TZWKFY5bYwc?si=nUuRKoxEqcHoYgae",
                "https://www.youtube.com/embed/wz7htO1TCic?si=qnFVjSmlEziyd2D0",
                "https://www.youtube.com/embed/rwp0Bx0awoE?si=sxsc2DljnyauAhBB",
                "https://www.youtube.com/embed/dpjypnxnS4U?si=iT0yx45D4NSR_QuH",
                "https://www.youtube.com/embed/8l5fRI-YnG0?si=exu_qaRRzeSrdfwG",
                "https://www.youtube.com/embed/CVl3llRt3Zo?si=jHXEOaSvFQDQAc2g",
                "https://www.youtube.com/embed/r4UtyB_4HWg?si=fjyjfyXqpOHvtQyq",
                "https://www.youtube.com/embed/m_UjYOfmkn8?si=y5LT3mBFlWn9zfiw",
                "https://www.youtube.com/embed/q2aDXPNVEMQ?si=5osRGVr5szmPNl8K",
                "https://www.youtube.com/embed/d9wUVgEwS40?si=bKZy5J91VFOrHvo7",
                "https://www.youtube.com/embed/kwFR02CjfIM?si=aS3i62-SIM7Q-q_r"];

function onYouTubeIframeAPIReady() {
  player1 = new YT.Player('youtubeIframe1', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });

  player2 = new YT.Player('youtubeIframe2', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });

  player3 = new YT.Player('youtubeIframe3', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });

  player4 = new YT.Player('youtubeIframe4', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });

  player5 = new YT.Player('youtubeIframe5', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });

  player6 = new YT.Player('youtubeIframe6', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });

  player7 = new YT.Player('youtubeIframe7', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });

  player8 = new YT.Player('youtubeIframe8', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });

  player9 = new YT.Player('youtubeIframe9', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });

  player10 = new YT.Player('youtubeIframe10', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });

  player11 = new YT.Player('youtubeIframe11', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });

  player12 = new YT.Player('youtubeIframe12', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });

  player13 = new YT.Player('youtubeIframe13', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });

  player14 = new YT.Player('youtubeIframe14', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });

  player15 = new YT.Player('youtubeIframe15', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });

}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    $('#doc1').modal('hide');
    $('#doc2').modal('hide');
    $('#doc3').modal('hide');
    $('#doc4').modal('hide');
    $('#doc5').modal('hide');
    $('#doc6').modal('hide');
    $('#doc7').modal('hide');
    $('#doc8').modal('hide');
    $('#doc9').modal('hide');
    $('#doc10').modal('hide');
    $('#short1').modal('hide');
    $('#short2').modal('hide');
    $('#short3').modal('hide');
    $('#short4').modal('hide');
    $('#short5').modal('hide');
  }
}

$('#doc1').on('shown.bs.modal', function (e) {
  $('#youtubeIframe1').attr('src', videoSrc[0]);
});

$('#doc2').on('shown.bs.modal', function (e) {
  $('#youtubeIframe2').attr('src', videoSrc[1]);
});

$('#doc3').on('shown.bs.modal', function (e) {
  $('#youtubeIframe3').attr('src', videoSrc[2]);
});
  
$('#doc4').on('shown.bs.modal', function (e) {
  $('#youtubeIframe4').attr('src', videoSrc[3]);
});

$('#doc5').on('shown.bs.modal', function (e) {
  $('#youtubeIframe5').attr('src', videoSrc[4]);
});
  
$('#doc6').on('shown.bs.modal', function (e) {
  $('#youtubeIframe6').attr('src', videoSrc[5]);
});
  
$('#doc7').on('shown.bs.modal', function (e) {
  $('#youtubeIframe7').attr('src', videoSrc[6]);
});
    
$('#doc8').on('shown.bs.modal', function (e) {
  $('#youtubeIframe8').attr('src', videoSrc[7]);
});

$('#doc9').on('shown.bs.modal', function (e) {
  $('#youtubeIframe9').attr('src', videoSrc[8]);
});
      
$('#doc10').on('shown.bs.modal', function (e) {
  $('#youtubeIframe10').attr('src', videoSrc[9]);
});
  
$('#short1').on('shown.bs.modal', function (e) {
  $('#youtubeIframe11').attr('src', videoSrc[10]);
});
  
$('#short2').on('shown.bs.modal', function (e) {
  $('#youtubeIframe12').attr('src', videoSrc[11]);
});
    
$('#short3').on('shown.bs.modal', function (e) {
  $('#youtubeIframe13').attr('src', videoSrc[12]);
});

$('#short4').on('shown.bs.modal', function (e) {
  $('#youtubeIframe14').attr('src', videoSrc[13]);
});
      
$('#short5').on('shown.bs.modal', function (e) {
  $('#youtubeIframe15').attr('src', videoSrc[14]);
});





$('#doc1').on('hidden.bs.modal', function (e) {
  $('#youtubeIframe1').attr('src', '');
});

$('#doc2').on('hidden.bs.modal', function (e) {
  $('#youtubeIframe2').attr('src', '');
});

$('#doc3').on('hidden.bs.modal', function (e) {
  $('#youtubeIframe3').attr('src', '');
});
  
$('#doc4').on('hidden.bs.modal', function (e) {
  $('#youtubeIframe4').attr('src', '');
});

$('#doc5').on('hidden.bs.modal', function (e) {
  $('#youtubeIframe5').attr('src', '');
});
  
$('#doc6').on('hidden.bs.modal', function (e) {
  $('#youtubeIframe6').attr('src', '');
});

$('#doc7').on('hidden.bs.modal', function (e) {
  $('#youtubeIframe7').attr('src', '');
});
  
$('#doc8').on('hidden.bs.modal', function (e) {
  $('#youtubeIframe8').attr('src', '');
});
    
$('#doc9').on('hidden.bs.modal', function (e) {
  $('#youtubeIframe9').attr('src', '');
});
    
$('#doc10').on('hidden.bs.modal', function (e) {
  $('#youtubeIframe10').attr('src', '');
});

$('#short1').on('hidden.bs.modal', function (e) {
  $('#youtubeIframe11').attr('src', '');
});

$('#short2').on('hidden.bs.modal', function (e) {
  $('#youtubeIframe12').attr('src', '');
});
  
$('#short3').on('hidden.bs.modal', function (e) {
  $('#youtubeIframe13').attr('src', '');
});
    
$('#short4').on('hidden.bs.modal', function (e) {
  $('#youtubeIframe14').attr('src', '');
});
    
$('#short5').on('hidden.bs.modal', function (e) {
  $('#youtubeIframe15').attr('src', '');
});
      
  window.addEventListener('load',function(){
    $("#region-main").append('<div id="faSearchFrame" class="d-none" style="width: 500px !important; position:fixed;top:130px;right:20px; z-index: 2000; background:#fff;overflow:auto; overflow-x:clip; height:400px; box-shadow: 5px 5px 5px #888888;"></div>');
    $(".header-right").prepend('<div class="custom-menus my-auto"><a role="button" target="_blank" class="border border-dark rounded-circle p-2 text-dark" role="button" title="Icon Search" data-toggle="modal" data-target=".faSearch-modal" id="faSearch"><i style="font-size:1.1rem; width:18px;"" class="fa fa-icons fa-fw" aria-hidden="true"></i></a>');
    $("#faSearchFrame").load("https://mon-arts-ed-des.github.io/artsmoodlecode/fa5.html"); 
	  $('#faSearch').on('click',function(){
		  $('#faSearchFrame').toggleClass('d-none'); 
	  });
  });

/*
<iframe src="https://mon-arts-ed-des.github.io/artsmoodlecode/fa5.html" width="400px" height="400px" allow="clipboard-read; clipboard-write self ${https://mon-arts-ed-des.github.io/artsmoodlecode/fa5.html}"></iframe>
<iframe src="https://mon-arts-ed-des.github.io/artsmoodlecode/fa5.html" width="400px" height="400px" frameborder=""></iframe>
window.addEventListener('load',function(){
  $(".header-right").prepend('<div class="custom-menus my-auto"><a type="button" target="_blank" class="border border-dark rounded-circle p-2 text-dark" role="button" title="FA Search"  data-toggle="modal" data-target=".modal-fa-search" id="faSearch"><i class="fa fa-icons" style="font-size:1.25rem;"></i></a>');
				$("#region-main").append('<style>.modal-fa-search{max-width: 80% !important;}</style><div class="modal fade modal-fa-search" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"><div class="modal-dialog modal-lg modal-faSearch"><div class="modal-content"><div class="modal-header mb-0 p-2 bg-danger text-white px-5"><h5 class="modal-title text-white my-auto" id="faSearchModal">To close this window click the button on the right or anywhere outside this box.</h5><button type="button" class="btn btn-outline-light btn-lg rounded" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">Close <i class="fa fa-times"></i></span></button></div><iframe src="https://mon-arts-ed-des.github.io/artsmoodlecode/fa5.html" width="400px" height="400px"></iframe></div></div></div>');
			});
*/

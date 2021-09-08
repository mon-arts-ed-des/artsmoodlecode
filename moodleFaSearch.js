  window.addEventListener('load',function(){
    $("#region-main").append('<div id="faSearchFrame" class="d-none" style="max-width: 50% !important; position:fixed;top:130px;right:20px; z-index: 2000;"><iframe src="https://mon-arts-ed-des.github.io/artsmoodlecode/fa5.html" width="400px" height="400px" allow="clipboard-read; clipboard-write self ${https://mon-arts-ed-des.github.io/artsmoodlecode/fa5.html}"></iframe></div>');
    $(".header-right").prepend('<div class="custom-menus my-auto"><a role="button" target="_blank" class="border border-dark rounded-circle p-2 text-dark" role="button" title="Icon Search" style="width:38px; height: 38px;" data-toggle="modal" data-target=".faSearch-modal" id="faSearch"><i style="font-size:1.25rem;" class="fa fa-icons" aria-hidden="true"></i></a>');
    $('#faSearch').on('click',function(){
    $('#faSearchFrame').toggleClass('d-none');
    });
  });

/*
<iframe src="https://mon-arts-ed-des.github.io/artsmoodlecode/fa5.html" width="400px" height="400px" frameborder=""></iframe>
window.addEventListener('load',function(){
  $(".header-right").prepend('<div class="custom-menus my-auto"><a type="button" target="_blank" class="border border-dark rounded-circle p-2 text-dark" role="button" title="FA Search"  data-toggle="modal" data-target=".modal-fa-search" id="faSearch"><i class="fa fa-icons" style="font-size:1.25rem;"></i></a>');
				$("#region-main").append('<style>.modal-fa-search{max-width: 80% !important;}</style><div class="modal fade modal-fa-search" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"><div class="modal-dialog modal-lg modal-faSearch"><div class="modal-content"><div class="modal-header mb-0 p-2 bg-danger text-white px-5"><h5 class="modal-title text-white my-auto" id="faSearchModal">To close this window click the button on the right or anywhere outside this box.</h5><button type="button" class="btn btn-outline-light btn-lg rounded" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">Close <i class="fa fa-times"></i></span></button></div><iframe src="https://mon-arts-ed-des.github.io/artsmoodlecode/fa5.html" width="400px" height="400px"></iframe></div></div></div>');
			});
*/

window.addEventListener('load',function(){
var cpTotal = 0;
var groupOne = $("td.cell:contains('Applied research design - 4cp')");
var groupTwo = $("td.cell:contains('Communicating for impact - 4cp')");
var groupThree= $("td.cell:contains('Data analytics - 4cp')");
var groupFour = $("td.cell:contains('Effective networking - 2cp')");
var groupFive = $("td.cell:contains('Leading from any seat - 2cp')");
var groupSix = $("td.cell:contains('Media training - 4cp')");
var groupSeven = $("td.cell:contains('Pitching perfectly - 2cp')");
var groupEight = $("td.cell:contains('Writing professionally - 2cp')");

var groupOneBtn = $(groupOne).closest('tr').find('button'); //add4
var groupTwoBtn = $(groupTwo).closest('tr').find('button'); //add4
var groupThreeBtn = $(groupThree).closest('tr').find('button'); //add4
var groupFourBtn = $(groupFour).closest('tr').find('button'); //add2
var groupFiveBtn = $(groupFive).closest('tr').find('button'); //add2
var groupSixBtn = $(groupSix).closest('tr').find('button'); //add2
var groupSevenBtn = $(groupSeven).closest('tr').find('button'); //add2
var groupEightBtn = $(groupEight).closest('tr').find('button'); //add2

if($(groupOneBtn).text()=="Leave group "){
cpTotal += 4
}
if($(groupTwoBtn).text()=="Leave group "){
cpTotal += 4
}
if($(groupThreeBtn).text()=="Leave group "){
cpTotal += 4
}
if($(groupSixBtn).text()=="Leave group "){
cpTotal += 4
}
if($(groupFourBtn).text()=="Leave group "){
cpTotal += 2
}
if($(groupFiveBtn).text()=="Leave group "){
cpTotal += 2
}
if($(groupSevenBtn).text()=="Leave group "){
cpTotal += 2
}
if($(groupEightBtn).text()=="Leave group "){
cpTotal += 2
}
  if(cpTotal==4){
    if($(groupOneBtn).text()=="Become member of "){
			 $(groupOneBtn).css('display','none');
		}
    if($(groupTwoBtn).text()=="Become member of "){
			 $(groupTwoBtn).css('display','none');
		}
    if($(groupThreeBtn).text()=="Become member of "){
			 $(groupThreeBtn).css('display','none');
		}
    if($(groupSixBtn).text()=="Become member of "){
			 $(groupSixBtn).css('display','none');
		}
  }
  else if(cpTotal==6){
    if($(groupOneBtn).text()=="Become member of "){
			 $(groupOneBtn).css('display','none');
		}
    if($(groupTwoBtn).text()=="Become member of "){
			 $(groupTwoBtn).css('display','none');
		}
    if($(groupThreeBtn).text()=="Become member of "){
			 $(groupThreeBtn).css('display','none');
		}
    if($(groupFourBtn).text()=="Become member of "){
			 $(groupFourBtn).css('display','none');
		}
    if($(groupFiveBtn).text()=="Become member of "){
			 $(groupFiveBtn).css('display','none');
		}
    if($(groupSixBtn).text()=="Become member of "){
			 $(groupSixBtn).css('display','none');
		}
    if($(groupSevenBtn).text()=="Become member of "){
			 $(groupSevenBtn).css('display','none');
		}
    if($(groupEightBtn).text()=="Become member of "){
			 $(groupEightBtn).css('display','none');
		}
var currentURL = window.location.href;
var blockTitles = $('aside section .card-title').text();
var returnToSectionLink = $('#nav-drawer a:contains("Overview")').attr('href');
$('body').append('<div class="container"><div class="modal fade" id="selectionComplete" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Selections complete</h4><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body"><p class="alert alert-danger border border-danger">Once you close or click outside this window you will be redirected back to the overview section. Please read why you are seeing this information below.</p><p>You have chosen 6 credit points worth of modules. If you want to make changes to your selection, please post the changes you want to make <a href="#" target="_blank">to this forum</a>. You will then be notified when the ability to make your choices again is open again.</p></div><div class="modal-footer text-center"><button type="button" class="btn btn-secondary mx-auto btn-lg btn-dark" data-dismiss="modal">Close</button></div></div></div></div></div>');
if (cpTotal == 6){
  $('#selectionComplete').modal('show');
}  
else {
//do nothing
}
$("#selectionComplete").on("hidden.bs.modal", function () {
    window.location.href = returnToSectionLink;
});    
  }
  console.log("cpTotal = "+cpTotal)
  });

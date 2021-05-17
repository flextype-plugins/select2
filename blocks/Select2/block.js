$(".js-select2").each(function() { 
    $(this).select2(JSON.parse($('input[name=__select2_options_' + $(this).prop('name') + ']').val()));  
});
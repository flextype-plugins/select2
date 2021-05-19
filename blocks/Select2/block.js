$(".js-select2").each(function() { 
    var select2Name = $(this).prop('name');
    window[select2Name] = $(this).select2(JSON.parse($('input[name=__select2_options_' + select2Name + ']').val()));  
});
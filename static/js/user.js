$('.arrow').on('click', (e)=>{
    if ($(e.target).data('arrow')=='0'){
        $(e.target).text('arrow_drop_up')
        $(e.target).data('arrow', '1')
        console.log($(e.target).parents('.activity'))
        $(e.target).parents('.activity').find('.ticket').removeClass('hidden')
    }else{
        $(e.target).text('arrow_drop_down')
        $(e.target).data('arrow', '0')
        $(e.target).parents('.activity').find('.ticket').addClass('hidden')
    }
})

$('.change_password').on('click', ()=>{
    $('.change_password_block').removeClass('hidden')
})
$('.change_password_clear').on('click', ()=>{
    $('.change_password_block').addClass('hidden')
})
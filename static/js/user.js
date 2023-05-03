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

$('#sales_status').on('click', ()=>{
    $('#sales_status_body').removeClass('hidden')
    $('#sales_status').removeClass('text-gray40')
    $('#sales_status').addClass('text-primary border-b-4')
    $('#data_analysis_body').addClass('hidden')
    $('#data_analysis').addClass('text-gray40')
    $('#data_analysis').removeClass('text-primary border-b-4')
})
$('#data_analysis').on('click', ()=>{
    $('#data_analysis_body').removeClass('hidden')
    $('#data_analysis').removeClass('text-gray40')
    $('#data_analysis').addClass('text-primary border-b-4')
    $('#sales_status_body').addClass('hidden')
    $('#sales_status').addClass('text-gray40')
    $('#sales_status').removeClass('text-primary border-b-4')
})

if($('.calculated_daily').hasClass('calculated_daily')){
    let calculated_daily = new Chart($('.calculated_daily'), {
        type: "bar",
        data: {
            labels: ['2023/03/02', '2023/03/03', '2023/03/04'],
            datasets: [{
            label: '每日銷售狀況',
            data: [60, 49, 72]
            },{
                type: 'line',
                label: '營業額',
                data: [60, 49, 72]
            }]
        },
        options: {
            maintainAspectRatio: false,
        }
        
    });
}

if($('.buy_member').hasClass('buy_member')){
    let buy_member = new Chart($('.buy_member'), {
        type: "bar",
        data: {
            labels: ['男', '女'],
            datasets: [{
            label: '購票會員數',
            data: [60, 49]
            }]
        },
        options: {
            maintainAspectRatio: false,
        }
        
    });   
}
if($('.buy_quantity').hasClass('buy_quantity')){
    let buy_quantity = new Chart($('.buy_quantity'), {
        type: "bar",
        data: {
            labels: ['男', '女'],
            datasets: [{
            label: '購票會員數',
            data: [60, 49]
            }]
        },
        options: {
            maintainAspectRatio: false,
        }
        
    });
}


// 新增活動
$('.add_ticket').on('click', ()=>{
    
    $('.add_ticket_block').removeClass('hidden')
})
$('.add_ticket_clear').on('click', ()=>{
    $('.add_ticket_block').addClass('hidden')
})


$('.to_step1').on('click', ()=>{
    $('.step2').addClass('hidden')
    $('.step1').removeClass('hidden')
})
$('.to_step2').on('click', ()=>{
    $('.step1').addClass('hidden')
    $('.step3').addClass('hidden')
    $('.step2').removeClass('hidden')
})
$('.to_step3').on('click', ()=>{
    $('.step2').addClass('hidden')
    $('.step4').addClass('hidden')
    $('.step3').removeClass('hidden')
})
$('.to_step4').on('click', ()=>{
    $('.step3').addClass('hidden')
    $('.step5').addClass('hidden')
    $('.step4').removeClass('hidden')
})

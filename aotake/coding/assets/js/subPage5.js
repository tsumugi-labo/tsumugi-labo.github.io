$(function(){
    $(".qa dt").on("click",function(){
        $(this).next(".qa dd").slideToggle();
    });

    $("form").on("submit",function(e){
        let error = false;
        $(".alert").hide();

        // お客様区分
        if($
        ("input[name='customer']:checked").length === 0){
            $(".customer-alert").show();
            error = true;
        }

        // お問い合わせ項目
        if($
        ("input[name='serect']:checked").length === 0){
            $(".serect-alert").show();
            error = true;
        }

        // 名前
        if($
        ("input[name='user_name']").val() === ""){
            $(".name-alert").show();
            error = true;
        }

        // TEL
        if($
        ("input[name='phone']").val() === ""){
            $(".phone-alert").show();
            error = true;
        }

        // メール
        if($
        ("input[name='email']").val() === ""){
            $(".email-alert").show();
            error = true;
        }

        // お問い合わせ内容
        if($
            ("textarea[name='message']").val() === ""){
                $(".message-alert").css("display","block");
                error = true;
        }

        // プライバシー
        if($
            ("input[name='agree']").prop("checked") === false){
                $
                (".agree-alert").css("display","block");
                error = true;
        }

        if(error){
            e.preventDefault();
        }
    
    });
});

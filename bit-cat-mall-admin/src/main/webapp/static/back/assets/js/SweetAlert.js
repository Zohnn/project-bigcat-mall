var SweetAlert = function () {

        //main function to initiate the module
    var handlerSweetAlert = function(){
            $('.mt-sweetalert').each(function(){
                var sa_title = $(this).data('title');
                var sa_message = $(this).data('message');
                var sa_type = $(this).data('type');
                var sa_allowOutsideClick = $(this).data('allow-outside-click');
                var sa_showConfirmButton = $(this).data('show-confirm-button');
                var sa_showCancelButton = $(this).data('show-cancel-button');
                var sa_closeOnConfirm = $(this).data('close-on-confirm');
                var sa_closeOnCancel = $(this).data('close-on-cancel');
                var sa_confirmButtonText = $(this).data('confirm-button-text');
                var sa_cancelButtonText = $(this).data('cancel-button-text');
                var sa_popupTitleSuccess = $(this).data('popup-title-success');
                var sa_popupMessageSuccess = $(this).data('popup-message-success');
                var sa_popupTitleCancel = $(this).data('popup-title-cancel');
                var sa_popupMessageCancel = $(this).data('popup-message-cancel');
                var sa_confirmButtonClass = $(this).data('confirm-button-class');
                var sa_cancelButtonClass = $(this).data('cancel-button-class');

                var sa_url = $(this).data('url');

                $(this).click(function(){
                    //console.log(sa_btnClass);
                    swal({
                            title: sa_title,
                            text: sa_message,
                            type: sa_type,
                            allowOutsideClick: sa_allowOutsideClick,
                            showConfirmButton: sa_showConfirmButton,
                            showCancelButton: sa_showCancelButton,
                            confirmButtonClass: sa_confirmButtonClass,
                            cancelButtonClass: sa_cancelButtonClass,
                            closeOnConfirm: sa_closeOnConfirm,
                            closeOnCancel: sa_closeOnCancel,
                            confirmButtonText: sa_confirmButtonText,
                            cancelButtonText: sa_cancelButtonText,
                        },
                        function(isConfirm){
                            if (isConfirm){
                                swal(sa_popupTitleSuccess, sa_popupMessageSuccess, "success");
                                setTimeout(function () {
                                    window.location.href=sa_url;
                                },1000);

                            } else {
                                swal(sa_popupTitleCancel, sa_popupMessageCancel, "error");
                            }
                        });
                });
            });
        };
    return{
        initSweetAlert:function () {
            handlerSweetAlert();
        }
    }
}();
//不用$而用jQuery是防止冲突
jQuery(document).ready(function() {
    SweetAlert.initSweetAlert();
});

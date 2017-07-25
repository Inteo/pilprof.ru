$(document).ready(function() {
  $(".switcher_btn").click(function(){
    $(this).closest(".switcher_control").find(".switcher_btn").removeClass("active");
    $(this).addClass("active");
    var holder = $(this).closest(".switcher").find(".switcher_holder");
    holder.removeClass("active");
    holder.filter('[data-switch-hold='+$(this).data("switch-btn")+']').addClass("active");
    return false;
  });
});
// <!--appRoom = App.cable.subscriptions.create("RoomChannel", {-->
// <!--  connected: function() {-->
// <!--    // Called when the subscription is ready for use on the server-->
// <!--  },-->

// <!--  disconnected: function() {-->
// <!--    // Called when the subscription has been terminated by the server-->
// <!--  },-->

// <!--  received: function(data) {-->
// <!--    const messages = document.getElementById('messages');-->
// <!--    // var newDiv = document.createElement("div");-->
// <!--    // if messages.user == current_user "me"-->
// <!--    // else "other"-->

// <!--    messages.insertAdjacentHTML('beforeend', data['message']);-->
// <!--    // messages.insertAdjacentHTML("me", data['message']);-->
// <!--    checked()-->

// <!--  },-->

// <!--  speak: function(message) {-->
// <!--    const room_id = document.getElementById('messages').getAttribute('room_id');-->
// <!--    return this.perform('speak', {message: message, room_id: room_id, checked:1});-->
// <!--  }-->
// <!--});-->

// <!--window.addEventListener("keypress", function(e) {-->
// <!--  if (e.keyCode === 13) {-->
// <!--    appRoom.speak(e.target.value);-->
// <!--    e.target.value = '';-->
// <!--    e.preventDefault();-->
// <!--  }-->
// <!--})-->

// <!--function checked(){-->
// <!--  const room_id = document.getElementById('messages').getAttribute('room_id');-->

// <!--	var url = '/user/messages/notification?room_id=' + room_id + '&who=';-->
// <!--	<#% if user_signed_in? %>-->
// <!--		url = url +'user';-->
// <!--	<#% else %>-->
// <!--		url = url +'healthcenter';-->
// <!--	<#% end %>	-->

// <!--	$.ajax({-->
// <!--            url: url,-->
// <!--            type: 'GET',-->
// <!--            dataType: 'html'-->
// <!--        }).done(function(data){-->

// <!--        }).fail(function(data){-->

// <!--        });-->
// <!--    });-->
// <!--}-->

document.addEventListener("turbolinks:load", function(){
appRoom = App.cable.subscriptions.create("RoomChannel", {
  connected: function() {
    // Called when the subscription is ready for use on the server
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function(data) {
    const messages = document.getElementById('messages');
    const name = messages.getAttribute('name');
    const from = messages.getAttribute('from');
    // var newDiv = document.createElement("div");
    // if messages.user == current_user "me"
    // else "other"
    messages.insertAdjacentHTML('beforeend', data['message']);
    if (data['from'] == from){
      $("."+from).css('text-align','right');
      $("."+from).children('p').removeClass('pl-5 pt-5');
      $("."+from).children('p').addClass('pr-5 pt-4');
      $("."+from).children('p').children(".Editlink").hide();
    }
    else{
      $("."+from+"_link").hide();
    }
    // messages.insertAdjacentHTML("me", data['message']);
    checked()

  },

  speak: function(message) {
    const room_id = document.getElementById('messages').getAttribute('room_id');
    const from = document.getElementById('messages').getAttribute('from');
    return this.perform('speak', {message: message, room_id: room_id, checked:1, from: from});
  }
});

window.addEventListener("keypress", function(e) {
  if (e.keyCode === 13) {
    appRoom.speak(e.target.value);
    e.target.value = '';
    e.preventDefault();
  }
})

function checked(){
  const room_id = document.getElementById('messages').getAttribute('room_id');

	var url = '/user/messages/notification?room_id=' + room_id + '&who=';
	url = url = gon.user_kind

	$.ajax({
            url: url,
            type: 'GET',
            dataType: 'html'
        }).done(function(data){

        }).fail(function(data){

        });
    };
})

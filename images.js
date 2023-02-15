function setShogunMood(mood){
    if(mood === "happy"){
        document.getElementById('shogunsama').src="Icon_Emoji_Raiden_Shogun_3.png";
        document.querySelector('body').style.background="url('inazuma_region.jpg')";
        alert('(｡•̀ᴗ-)✧');
    }
    else{
        document.getElementById('shogunsama').src="Icon_Emoji_Raiden_Shogun_6.png";
        document.querySelector('body').style.background="url('inazuma_night.jpg')";
        alert('凸(⊙▂⊙✖ ) 凸(⊙▂⊙✖ )');
    }
        
}
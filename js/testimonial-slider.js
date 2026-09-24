(function(root){
  'use strict';

  function clampIndex(index, total){
    if(!total) return 0;
    if(index < 0) return total - 1;
    if(index >= total) return 0;
    return index;
  }

  function getSlideStep(cardWidth, gap, viewportWidth){
    var normalizedGap = Number(gap) || 0;
    if(!cardWidth || cardWidth <= 0){
      return Number(viewportWidth) || 0;
    }
    return cardWidth + normalizedGap;
  }

  function moveCurrentIndex(currentIndex, direction, total){
    if(!total) return 0;
    var nextIndex = currentIndex + direction;
    if(nextIndex < 0) return total - 1;
    if(nextIndex >= total) return 0;
    return nextIndex;
  }

  function getTransformValue(currentIndex, cardWidth, gap){
    return -(currentIndex * getSlideStep(cardWidth, gap, 0));
  }

  root.TripkiteSlider = {
    clampIndex: clampIndex,
    getSlideStep: getSlideStep,
    moveCurrentIndex: moveCurrentIndex,
    getTransformValue: getTransformValue
  };
})(window);

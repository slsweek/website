<template functional>
  <div class="gitch" :style="{ ...props.styles }">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@keyframes glitch-anim {
  $steps: 10;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100) + px, 9999px, random(100) + px, 0);
    }
  }
}

/*
  @mixin imageGlitch($name, $intensity, $width, $height, $top, $left)
  =================
  1. Namespace
  2. Intensity
  3. Width (px)
  4. Height (px)
  5. Top (px, abs pos)
  6. Left (px, abs pos)
*/
@mixin imageGlitch($name, $intensity, $width, $height, $top, $left) {

  $steps: $intensity;

  // Ensure the @keyframes are generated at the root level
  @at-root {
    // We need two different ones
    @for $i from 1 through 2 {
      @keyframes #{$name}-anim-#{$i} {
        @for $i from 0 through $steps {
          #{percentage($i*(1/$steps))} {
            clip: rect(
              random($height)+px,
              $width+px,
              random($height)+px,
              0
            );
          }
        }
      }
    }
  }

  > img {
    position: absolute;
    top: $top+px;
    left: $left+px;
  }
  > img:nth-child(2),
  > img:nth-child(3){
    clip: rect(0, 0, 0, 0);
  }
  > img:nth-child(2) {
    left: ($left + 2) + px;
    animation: #{$name}-anim-1 2s infinite linear alternate-reverse;
  }
  > img:nth-child(3) {
    left: ($left - 2) + px;
    animation: #{$name}-anim-2 3s infinite linear alternate-reverse;
  }
}

.glitch::before {
  content: "";
  animation: glitch-anim-1 2s infinite linear alternate-reverse;
}

.glitch::after {
  content: "";
  animation: glitch-anim-2 2s infinite linear alternate-reverse;
}

.gitch {
  // @include imageGlitch("glitch-anim", 15, 100, 100, 200, 75);
}
</style>

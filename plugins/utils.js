const urlopen = (url) => {
      window.location.href = url;
}

export default ({}, inject) => {
  inject('urlopen', urlopen)
}

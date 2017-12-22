const validate = values => {
  const errors = {}
  if(values.selectCategory || values.selectProduct){
    if(!values.selectCategory){
      errors.selectCategory = 'Required'
    }else if(!values.selectProduct){
        errors.selectProduct = 'Required'
    }
  }else{
    if (!values.modelname) {
      errors.modelname = 'Required'
    }
    if (values.modelGenre==0 || values.modelGenre==undefined) {
      errors.modelGenre = 'Required'
    }
    if (!values.modelsubtitle) {
      errors.modelsubtitle = 'Required'
    }
    if (!values.thumbnailimage1) {
      errors.thumbnailimage1 = 'Please select thumbnail for 3D model !!'
    }
    if (!values.modeldescription) {
      errors.modeldescription = 'Required'
    }
    if (!values.featuretabtitleone) {
      errors.featuretabtitleone = 'Required';
    }
    if (!values.featuretabtitletwo) {
      errors.featuretabtitletwo = 'Required';
    }
    if (!values.featuretabtitlethree) {
      errors.featuretabtitlethree = 'Required';
    }
    if (!values.featuretabtitleonedescription) {
      errors.featuretabtitleonedescription = 'Required';
    }
    if (!values.featuretabtitletwodescription) {
      errors.featuretabtitletwodescription = 'Required';
    }
    if (!values.featuretabtitlethreedescription) {
      errors.featuretabtitlethreedescription = 'Required';
    }
    if(!values.blogimage1){
      errors.blogimage1="Please select background image for blog !!"
    }
    if (!values.blogdetails) {
      errors.blogdetails = 'Required';
    }
    if (!values.featureimages1 || !values.featureimages1.length) {
     errors.featureimages1 = { _error: 'At least one image must be selected' }
   }
   else {
      const imagefeaturesArrayErrors = []
      values.featureimages1.forEach((featureimages, imagefeaturesIndex) => {
        const imagefeaturesErrors = {}
        if (!featureimages || !featureimages.image) {
          imagefeaturesErrors.image = 'Required'
          imagefeaturesArrayErrors[imagefeaturesIndex] = imagefeaturesErrors
        }
      })
      if (imagefeaturesArrayErrors.length) {
        errors.featureimages = imagefeaturesArrayErrors
      }
    }
    if (!values.featurevideos || !values.featurevideos.length) {
     errors.featurevideos = { _error: 'At least one video must be selected' }
   }else {
      const featurevideoArrayErrors = []
      values.featurevideos.forEach((featurevideos, featurevideoIndex) => {
        const featurevideoErrors = {}
        if (!featurevideos || !featurevideos.video) {
          featurevideoErrors.video = 'Required'
          featurevideoArrayErrors[featurevideoIndex] = featurevideoErrors
        }
      })
      if (featurevideoArrayErrors.length) {
        errors.featurevideos = featurevideoArrayErrors
      }
    }
    return errors
  }
}

export default validate

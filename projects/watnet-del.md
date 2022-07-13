---
layout: default
---


# WatNet
This paper is about surface water mapping by using deep learning method. [[**Code**](https://github.com/xinluo2018/WatNet) and [**Dataset**](https://zenodo.org/record/5205674)]

## -- Model
We use Deeplabv3+ with MobileNetv2 backbone as the main model structure, additionly, some simple yet effective modifications are designed for improving the satellite image-based surface water mapping. 

  ![watnet](/assets/images/watnet/watnet_structure.png)

## -- DataSet
Surface water dataset for Deep learning could be downloaded from Zenodo [**[Link]**](https://doi.org/10.5281/zenodo.5205674).

  ![dataset](/assets/images/watnet/dataset.png)   

  |Labeling example 1:|Labeling example 2:|
  |---|---|
  |![example_1](/assets/images/watnet/label_sam_1.png)|![example_2](/assets/images/watnet/label_sam_2.png)|

## -- Performance
Accuracy for surface water mapping  
  
  ![accuracy](/assets/images/watnet/accuracy-compare.png)

Examples for surface water mapping  

  **Urban region**  
  ![urban-test](/assets/images/watnet/urban-test.png)

  **Cloudy region**   
  ![cloudy-test](/assets/images/watnet/cloudy-test.png)

  **Mountainous region**   
  ![mountain-test](/assets//images/watnet/mountain-test.png)



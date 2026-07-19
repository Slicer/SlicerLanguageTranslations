<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_Hant">
<context>
    <name>SlicerRadiomics</name>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="29"/>
        <source>Radiomics</source>
        <translation>影像組學</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="38"/>
        <source>
    This is a scripted loadable module bundled in the SlicerRadomics extension.
    It gives access to the radiomics feature calculation classes implemented in pyradiomics library.
    See more details at http://pyradiomics.readthedocs.io/.
    </source>
        <translation>
    這是 SlicerRadiomics 擴充功能內附的指令碼可載入模組。
    可使用 pyradiomics 函式庫所實作的影像組學特徵計算類別。
    詳情請參閱 http://pyradiomics.readthedocs.io/.
    </translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="48"/>
        <source>
    This work was partially supported by NIH/NCI ITCR program grant U24 CA194354.
    </source>
        <translation>
    本工作部分獲 NIH/NCI ITCR 計畫 U24 CA194354 資助。
    </translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="101"/>
        <source>Run the algorithm.</source>
        <translation>執行演算法。</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="132"/>
        <source>Select Input Volume and Segmentation</source>
        <translation>選取輸入影像體積與分割</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="149"/>
        <source>Pick the input image for the feature calculation.</source>
        <translation>選取要用於特徵計算的輸入影像。</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="150"/>
        <source>Input Image Volume: </source>
        <translation>輸入影像體積： </translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="165"/>
        <source>Pick the regions for feature calculation - defined by a segmentation or labelmap volume node.</source>
        <translation>選取要進行特徵計算的區域，此區域由分割節點或標籤圖影像體積節點定義。</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="166"/>
        <source>Input regions: </source>
        <translation>輸入區域： </translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="171"/>
        <source>Extraction Customization</source>
        <translation>自訂擷取設定</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="182"/>
        <source>Manual Customization</source>
        <translation>手動自訂設定</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="187"/>
        <source>Parameter File Customization</source>
        <translation>參數檔案自訂設定</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="203"/>
        <source>Feature Classes</source>
        <translation>特徵類別</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="209"/>
        <source>Features:</source>
        <translation>特徵：</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="232"/>
        <source>Toggle Features:</source>
        <translation>切換特徵：</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="234"/>
        <source>All Features</source>
        <translation>所有特徵</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="236"/>
        <source>Calculate all feature classes.</source>
        <translation>計算所有特徵類別。</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="238"/>
        <source>No Features</source>
        <translation>不選取任何特徵</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="240"/>
        <source>Calculate no feature classes.</source>
        <translation>不計算任何特徵類別。</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="246"/>
        <source>Resampling and Filtering</source>
        <translation>重新取樣與濾波</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="255"/>
        <source>Three floating-point numbers separated by comma defining the resampled pixel size (mm).</source>
        <translation>以逗號分隔的三個浮點數，用來定義重新取樣後的像素大小 (mm)。</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="255"/>
        <source>Resampled voxel size</source>
        <translation>重新取樣後的體素大小</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="261"/>
        <source>Laplacian of Gaussian filter kernel sizes (mm), separated by comma. If empty, no LoG filtering will be applied.</source>
        <translation>以逗號分隔的高斯拉普拉斯 (LoG) 濾波器核心大小 (mm)。若留空，則不會套用 LoG 濾波。</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="261"/>
        <source>LoG kernel sizes</source>
        <translation>LoG 核心大小</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="268"/>
        <source>If checked, PyRadiomics will calculate features on the image after applying wavelet transformation</source>
        <translation>勾選後，PyRadiomics 會在影像套用小波轉換後計算特徵</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="268"/>
        <source>Wavelet-based features</source>
        <translation>小波特徵</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="275"/>
        <source>Settings</source>
        <translation>設定</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="289"/>
        <source>Set the bin width</source>
        <translation>設定組距</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="289"/>
        <source>Bin Width</source>
        <translation>組距</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="295"/>
        <source>Use a symmetrical GLCM matrix</source>
        <translation>使用對稱的灰階共生矩陣 (GLCM)</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="295"/>
        <source>Enforce Symmetrical GLCM</source>
        <translation>強制使用對稱 GLCM</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="310"/>
        <source>Parameter File</source>
        <translation>參數檔案</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="315"/>
        <source>Output</source>
        <translation>輸出</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="324"/>
        <source>If checked, PyRadiomics outputs log messages from level DEBUG and higher (instead of INFO and higher)</source>
        <translation>勾選後，PyRadiomics 會輸出 DEBUG 層級以上的記錄訊息 (而非 INFO 層級以上)</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="324"/>
        <source>Verbose Output</source>
        <translation>詳細輸出</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="337"/>
        <source>Select the table where features will be saved, resets feature values on each run.</source>
        <translation>選取要儲存特徵的表格；每次執行時都會重設特徵值。</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="337"/>
        <source>Output table:</source>
        <translation>輸出表格：</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="386"/>
        <source>Working...</source>
        <translation>處理中……</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="472"/>
        <source>Apply</source>
        <translation>套用</translation>
    </message>
</context>
<context>
    <name>qSlicerAbstractCoreModule</name>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="30"/>
        <source>Informatics</source>
        <translation>資訊學</translation>
    </message>
</context>
</TS>

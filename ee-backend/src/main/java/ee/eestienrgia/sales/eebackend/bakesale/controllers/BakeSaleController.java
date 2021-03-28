package ee.eestienrgia.sales.eebackend.bakesale.controllers;

import ee.eestienrgia.sales.eebackend.bakesale.models.data.BakeSale;
import ee.eestienrgia.sales.eebackend.bakesale.models.BakeSaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/1.0")
public class BakeSaleController {

    @Autowired
    BakeSaleRepository bakeSaleRepository;

    @GetMapping("/bakeSales")
    List<BakeSale> getBakeItems(){
        return bakeSaleRepository.findAll();

    }



}

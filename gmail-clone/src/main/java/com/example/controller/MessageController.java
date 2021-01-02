package com.example.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.MessageModel;
import com.example.repo.MessageRepo;

@RestController
@CrossOrigin
public class MessageController {

	@Autowired
	MessageRepo messageRepo;
	
	@GetMapping("/getMessages")
	public Collection<MessageModel> getMessages() {
		System.out.println("-----Getting all the messages-----");
		return (Collection<MessageModel>) messageRepo.findAll();
	}
	
	@PostMapping("/addMessage")
	public ResponseEntity<?> addMessage(@RequestBody MessageModel messageModel) {
		System.out.println("-----Adding new message into the DB-----");
		messageRepo.save(messageModel);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
